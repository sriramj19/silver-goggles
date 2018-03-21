import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
    constructor(private dashboardServ: DashboardService) {

    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }
}
