import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';





import { SideMenuComponent } from '../core/side-menu/side-menu.component';
import { DashboardComponent } from './dashboard.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { MatToolbarModule } from '@angular/material/toolbar';





@NgModule({
    declarations: [
        DashboardComponent,
        OrganisationsComponent,
        SideMenuComponent
    ],
    imports: [
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
