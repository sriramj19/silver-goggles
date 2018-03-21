import { Injectable } from '@angular/core';
@Injectable()
export class SidebarCommonService {
    constructor() { }

    private isSidebarToggled: boolean = false;

    public getSidebarStatus() {
        return this.isSidebarToggled;
    }

    public toggleSidebar() {
        if (this.isSidebarToggled) {
            this.deactivateSidebar();
        } else {
            this.activateSidebar();
        }
    }

    public activateSidebar() {
        setTimeout(() => {
            this.isSidebarToggled = true;
        });
    }

    public deactivateSidebar() {
        this.isSidebarToggled = false;
    }
}