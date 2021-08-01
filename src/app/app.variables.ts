import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppVariables {

    private authorization_token: any = null;

    constructor() { }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    get_authorization_token(): any {
        return this.authorization_token;
    }

    set_authorization_token(data: any) {
        this.authorization_token = data;
    }

}
