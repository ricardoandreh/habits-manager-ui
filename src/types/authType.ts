export interface IUser {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    token?: string | null;
    isDarkMode: boolean;
}
  
export interface IAuthState {
    loading: boolean;
    user: IUser;
    error: unknown;
};