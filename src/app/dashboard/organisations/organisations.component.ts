import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { TableModel } from '../../shared/table.model';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.css']
})
export class OrganisationsComponent implements OnInit {
  tableData: TableModel[];
  displayedColumns: string[] = ['id', 'name', 'branchCode', 'companyCode'];
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getOrganisationstList().subscribe(
      (data: any) => this.tableData = data
    );
  }
}
