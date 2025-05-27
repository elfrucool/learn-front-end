import { makeAutoObservable } from 'mobx';

class ClicksStore {
    count = 0;

    constructor() {
        makeAutoObservable(this);
    };

    increment = () => {
        this.count++;
    };

    reset = () => {
        this.count = 0;
    };
}

export default ClicksStore;