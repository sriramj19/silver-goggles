import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { leftSidebarSlider } from '../../../router.animations'
import { SidebarCommonService } from '../../../shared';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    animations: [leftSidebarSlider()],
    host: {
        '(document:click)': 'handleClick($event)'
    }
})
export class SidebarComponent implements OnInit {
    isActive: boolean = false;
    showMenu: string = '';
    pushRightClass: string = 'push-right';

    constructor(public router: Router, private elementRef: ElementRef, private sidebarCommonServ: SidebarCommonService) {

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }
    /**
     * handleClick: Handling the click event to either close or make the sidebar stay
     * @param event Click event on the application
     */
    public handleClick(event) {
        try {
            var clickedComponent = event.target;
            var inside = false;
            do {
                if (this.elementRef.nativeElement.contains(clickedComponent)) {
                    inside = true;
                }
                clickedComponent = clickedComponent.parentNode;
            } while (clickedComponent);
            if (!inside) {
                if (this.sidebarCommonServ.getSidebarStatus()) {
                    this.toggleSidebar();
                }
            }
        } catch (err) {
            console.log('handling click event (handleClick): Navigation', err)
        }
    }

    /**
     * addBlurListener: Handle click on iframe to clost sidebar if it is already enabled
     */
    public addBlurListener() {
        focus();
        let self = this;
        window.addEventListener('blur', function () {
            let iframe = document.getElementById('iframe');
            if (iframe) {
                if (document.activeElement === iframe) {
                    if (self.sidebarCommonServ.getSidebarStatus()) {
                        self.toggleSidebar();
                    }
                }
            }
        });
    }


    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.addBlurListener();
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        this.sidebarCommonServ.toggleSidebar();
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
