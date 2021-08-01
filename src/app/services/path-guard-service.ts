import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AppVariables } from '../app.variables';


@Injectable({ providedIn: 'root' })
export class PathGuardService implements CanActivate {
    constructor(private router: Router, public appVariables: AppVariables) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let ReturnedValue = false;
        const Rolse = route.data.roles;

        if (Rolse.includes('LOGGED_IN') && this.appVariables.get_authorization_token() !== null) {
            let LoggedInUserRoles = false;
            if (Rolse.length === 1) {
                LoggedInUserRoles = true;
            }
            ReturnedValue = LoggedInUserRoles;
        } else if (Rolse.includes('NOT_LOGGED_IN') && this.appVariables.get_authorization_token() === null) {
            ReturnedValue = true;
        } else if (Rolse.includes('ANY')) {
            ReturnedValue = true;
        }

        if (ReturnedValue === false) {
            if (Rolse.includes('LOGGED_IN')) {
                this.router.navigate(['/login-or-register'], { queryParams: { returnUrl: state.url } });
            }

            if (Rolse.includes('NOT_LOGGED_IN')) {
                this.router.navigate(['/home']);
            }
        }
        return ReturnedValue;
    }
}
