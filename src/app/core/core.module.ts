import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AuthenticationService } from '../auth/auth.service';
import { DashboardService } from '../dashboard/dashboard.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
      SideMenuComponent
  ],
  imports: [
    AppRoutingModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule
  ],
  exports: [
    AppRoutingModule,
    SideMenuComponent
  ],
  providers: [
    DashboardService,
    AuthenticationService
  ]
})
export class CoreModule {}
