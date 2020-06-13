import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stats: any;
  branches: any;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getOrganisations().subscribe(
      (data: any) => this.stats = data.value.data
    );
    this.dashboardService.getBranches().subscribe(
      (data: any) => this.branches = data.value.data
    );
  }

  navigateToList() {
    this.router.navigate(['/organisations'], { relativeTo: this.route });
  }

}
