import { BaseService } from "@/services";
import type { IUser } from "@/types/authType";
import { AUTH_ROUTES } from "@/constants/apiRoutes";

export class AuthService extends BaseService {
    login(username: string, password: string) {
        return this.post<IUser>(AUTH_ROUTES.LOGIN, { username, password }).then(res => res);
    }

    logout() {
        return this.post<void>(AUTH_ROUTES.LOGOUT, {});
    }

    validateToken(token: string) {
        return this.post<boolean>(AUTH_ROUTES.VALIDATE, { token }).then(() => true);
    }

    createAccount(user: IUser) {
        return this.post<IUser>(AUTH_ROUTES.REGISTER, user).then(res => res);
    }
}
