import { Injectable } from '@angular/core';
import { AuthenticationService } from './auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService {

    constructor(private authService: AuthenticationService,
                private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (sessionStorage.getItem('userToken') != null) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}

