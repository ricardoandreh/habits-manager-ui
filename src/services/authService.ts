import { BaseService } from "@/services";
import type { IUser, IAccessToken } from "@/types/authType";
import { AUTH_ROUTES, USERS_BASE } from "@/constants/apiRoutes";

export class AuthService extends BaseService {
    login(email: string, password: string) {
        return this.post<IAccessToken>(AUTH_ROUTES.LOGIN, { email, password }).then(res => res);
    }

    createAccount(user: Partial<IUser>) {
        return this.post<IUser>(AUTH_ROUTES.REGISTER, user).then(res => res);
    }

    getUser() {
        return this.get<IUser>(USERS_BASE.GET_USER).then(res => res);
    }
}
