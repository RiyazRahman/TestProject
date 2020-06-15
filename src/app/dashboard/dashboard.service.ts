import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable()
export class DashboardService {
    stats: any;
    constructor(private http: HttpClient) { }

    getOrganisations() {
        return this.http.get('https://roc.dev.snbchain.com/snbchain-reports/api/public/dashboard/metric/ForemanOrgsStats')
            .pipe(map(
                data => {
                    return data;
                }
            )
            );
    }

    getBranches() {
        return this.http.get('https://roc.dev.snbchain.com/snbchain-reports/api/public/dashboard/metric/ForemanOrgBranchesStats')
            .pipe(map(
                data => {
                    return data;
                }
            )
            );
    }

    getOrganisationstList() {
        return this.http.get('https://dev.snbchain.com/snbchain-core/api/public/foreman-companies/get-mini-details')
            .pipe(map(
                data => {
                    console.log(data);
                    return data;
                }
            )
            );
    }
}
