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
        try {
            await authService.logout(); 
        } catch (_) {}
        state.user = { ...NEW_OBJECTS.USER };
        state.error = null;
        sessionStorage.removeItem("user");
    };
    

    const initializeUser = async () => {
        const storedUser = sessionStorage.getItem("user");
        if (storedUser) {
            try {
                const parsed = JSON.parse(storedUser);
                const isValid = await authService.validateToken(parsed.token)
                if (isValid) {
                    state.user = parsed;
                } else {
                    console.warn("Token inválido no localStorage");
                    logout();
                }
            } catch (_) {
                console.warn("Usuário inválido no localStorage");
                logout();
            }
        }
    };

    const createAccount = async (user: IUser) => {
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
        console.log('chegoyu')
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

    return {
        isLoading,
        isAuthenticated,
        error,
        isDarkMode,
        setLoading,
        login,
        logout,
        initializeUser,
        createAccount,
        toggleDarkMode,
    };
});