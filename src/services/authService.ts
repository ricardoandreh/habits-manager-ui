import { BaseService } from "@/services";
import type { IUser } from "@/types/authType";
import { AUTH_ROUTES } from "@/constants/apiRoutes";

export class AuthService extends BaseService {
    login(email: string, password: string) {
        return this.post<IUser>(AUTH_ROUTES.LOGIN, { email, password }).then(res => res);
    }

    createAccount(user: IUser) {
        return this.post<IUser>(AUTH_ROUTES.REGISTER, user).then(res => res);
    }
}
