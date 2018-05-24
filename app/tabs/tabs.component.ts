import {Component, ViewChild} from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {TabViewDirective} from "nativescript-angular/directives";
import {NSLocationStrategy} from "nativescript-angular/router/ns-location-strategy";

@Component({
    selector: 'tabs',
    // moduleId: module.id,
    templateUrl: './tabs/tabs.html'
})
export class TabsComponent {
    private isInitialNavigation = true;

    @ViewChild(TabViewDirective) tabView: TabViewDirective;

    constructor(router: Router, location: NSLocationStrategy) {
        router.events.subscribe(e => {
            if (e instanceof NavigationEnd) {
                this.isInitialNavigation = false;
                console.log('[ROUTER]: ' + e.toString());
                console.log(location.toString());
            }
        })
    }
}