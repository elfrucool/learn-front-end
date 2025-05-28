import { makeAutoObservable } from 'mobx';

class AuthStore {
    isAuthenticated = false;

    constructor() {
        makeAutoObservable(this);
    }

    login = (token: string) => {
        this.isAuthenticated = true;
    };

    logout = () => {
        this.isAuthenticated = false;
    };
}

export default AuthStore;