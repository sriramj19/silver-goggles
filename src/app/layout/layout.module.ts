import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { DashboardComponent } from './components/dashboard/dashboard.component'
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { SidebarCommonService } from '../shared';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        HttpClientModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule
    ],
    declarations: [
        LayoutComponent,
        DashboardComponent,
        SidebarComponent,
        HeaderComponent
    ],
    providers: [SidebarCommonService]
})
export class LayoutModule { }
