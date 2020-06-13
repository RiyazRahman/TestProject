import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

    token: string;

    constructor(private http: HttpClient) { }

    loginUser(name, login) {
        let params = new HttpParams();
        params = params.append('name', name);
        params = params.append('login', login);
        return this.http.get('https://dev.snbchain.com/snbchain-uaa/api/account/tmp_login_otp_generate', { observe: 'response', params })
            .pipe(map(
                data => {
                    return data;
                }
            ));
    }


    verfiyOTP(login, otp) {
        let params = new HttpParams();
        params = params.append('username', login);
        params = params.append('otp', otp);
        params = params.append('client_secret', 'OVfJYgQYHSubgMBMn2bXIMZe4');
        params = params.append('grant_type', 'otp');
        params = params.append('scope', 'read+write');
        params = params.append('client_id', 'user_portal_app_client');
        return this.http.post('https://dev.snbchain.com/snbchain-uaa/api/oauth/token', params);
    }
}
