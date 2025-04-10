export interface IAccessToken {
    accessToken: string;
}

export interface IUser {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    isDarkMode: boolean;
}
  
export interface IAuthState {
    loading: boolean;
    user: IUser;
    accessToken: string | null;
    error: unknown;
}