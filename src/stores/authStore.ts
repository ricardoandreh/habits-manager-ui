import { defineStore } from "pinia";
import { reactive, computed } from "vue";
import type { IUser, IAuthState } from "@/types/authType";
import { AuthService } from "@/services/authService";
import { NEW_OBJECTS } from "@/constants/newObjects";
import { useTheme } from "vuetify";

export const useAuthStore = defineStore("auth", () => {
    const authService = new AuthService();
    const themeStore = useTheme();

    const state: IAuthState = reactive({
        loading: false,
        user: { ...NEW_OBJECTS.USER},
        error: null,
    });

    const isLoading = computed(() => state.loading);
    const isAuthenticated = computed(() => !!state.user.token);
    const error = computed(() => state.error);
    const isDarkMode = computed(() => state.user.isDarkMode); 
    const userId = computed(() => state.user.id);

    const setLoading = (loading: boolean) => {
        state.loading = loading;
    };

    const login = async (username: string, password: string, remember: boolean = false) => {
        setLoading(true);
        try {
            const response: IUser = await authService.login(username, password);
            state.user = response;
            const storage = remember ? localStorage : sessionStorage;
            storage.setItem("user", JSON.stringify(response));
        } catch (err) {
            state.error = err instanceof Error ? err.message : "Login failed";
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        state.user = { ...NEW_OBJECTS.USER };
        state.error = null;
        sessionStorage.removeItem("user");
    };

    const createAccount = async (user: Partial<IUser>) => {
        setLoading(true);
        try {
            const response = await authService.createAccount(user);
            state.user = response;
            sessionStorage.setItem("user", JSON.stringify(response));
        } catch (err) {
            state.error = err instanceof Error ? err.message : "Account creation failed";
        } finally {
            setLoading(false);
        }
    }

    const toggleDarkMode = () => {
        state.user.isDarkMode = !state.user.isDarkMode;
        if (state.user.isDarkMode) {
            document.documentElement.classList.add("dark");
            themeStore.global.name.value = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            themeStore.global.name.value = "light";
        }
        localStorage.setItem("isDarkMode", JSON.stringify(state.user.isDarkMode));
    };

    const checkUserLoggedIn = () => {
        const user = sessionStorage.getItem("user");
        const darkMode = localStorage.getItem("isDarkMode");
        if (user) {
            const parsedUser = JSON.parse(user);
            state.user = { ...state.user, ...parsedUser };  
            const parsedDarkMode = JSON.parse(darkMode || "false");
            state.user.isDarkMode = parsedDarkMode;
            if (parsedDarkMode) {
                document.documentElement.classList.add("dark");
                themeStore.global.name.value = "dark";
            } else {
                document.documentElement.classList.remove("dark");
                themeStore.global.name.value = "light";
            }
            return true;
        } 
        return false;
    };

    return {
        isLoading,
        isAuthenticated,
        error,
        userId,
        isDarkMode,
        setLoading,
        login,
        logout,
        createAccount,
        toggleDarkMode,
        checkUserLoggedIn,
    };
});