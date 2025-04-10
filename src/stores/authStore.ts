import { defineStore } from "pinia";
import { reactive, computed } from "vue";
import type { IUser, IAuthState, IAccessToken } from "@/types/authType";
import { AuthService } from "@/services/authService";
import { NEW_OBJECTS } from "@/constants/newObjects";
import { useTheme } from "vuetify";
import router from "@/router";

export const useAuthStore = defineStore("auth", () => {
    const authService = new AuthService();
    const themeStore = useTheme();

    const state: IAuthState = reactive({
        loading: false,
        user: { ...NEW_OBJECTS.USER },
        accessToken: null,
        error: null,
    });

    const isLoading = computed(() => state.loading);
    const isAuthenticated = computed(() => !!state.accessToken);
    const error = computed(() => state.error);
    const isDarkMode = computed(() => state.user.isDarkMode); 
    const userId = computed(() => state.user.id);

    const setLoading = (loading: boolean) => {
        state.loading = loading;
    };

    const login = async (username: string, password: string, remember: boolean = false) => {
        setLoading(true);
        try {
            const response: IAccessToken = await authService.login(username, password);
            state.accessToken = response.accessToken;
            const storage = remember ? localStorage : sessionStorage;
            storage.setItem("accessToken", response.accessToken);
            await router.push("/");
            getUser();
        } catch (err) {
            state.error = err instanceof Error ? err.message : "Login failed";
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        state.user = { ...NEW_OBJECTS.USER };
        state.accessToken = null;
        state.error = null;
        sessionStorage.removeItem("accessToken");
        localStorage.removeItem("accessToken");
        await router.push("/login");
    };

    const createAccount = async (user: Partial<IUser>) => {
        setLoading(true);
        try {
            await authService.createAccount(user);
            await router.push("/login");
        } catch (err) {
            state.error =
                err instanceof Error ? err.message : "Account creation failed";
        } finally {
            setLoading(false);
        }
    }

    const getUser = async () => {
        const response = await authService.getUser();
        state.user = response;
        console.log(state.user);
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
        const accessToken = sessionStorage.getItem("accessToken") || localStorage.getItem("accessToken");
        const darkMode = localStorage.getItem("isDarkMode");
        if (accessToken) {
            const parsedToken = accessToken;
            state.accessToken = parsedToken;
            const parsedDarkMode = darkMode || "false";
            state.user.isDarkMode = parsedDarkMode === "true";
            if (parsedDarkMode === "true") {
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