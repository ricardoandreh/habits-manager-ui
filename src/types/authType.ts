export interface IUser {
    id?: number;
    name: string;
    email: string;
    token: string | null;
    isDarkMode: boolean;
}
  
export interface IAuthState {
    loading: boolean;
    user: IUser;
    error: unknown;
};