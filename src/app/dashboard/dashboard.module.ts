import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';




import { DashboardComponent } from './dashboard.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';





@NgModule({
    declarations: [
        DashboardComponent,
        OrganisationsComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatButtonModule,
        FormsModule,
        MatTableModule,
        MatToolbarModule
    ]
})
export class DashboardModule { }
