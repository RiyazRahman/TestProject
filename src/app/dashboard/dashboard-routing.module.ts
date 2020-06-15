import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SideMenuComponent } from '../core/side-menu/side-menu.component';
import { DashboardComponent } from './dashboard.component';
import { OrganisationsComponent } from './organisations/organisations.component';


const routes: Routes = [
  {
    path: '',
    component: SideMenuComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'organisations', component: OrganisationsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
