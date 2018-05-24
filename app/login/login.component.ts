import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'login',
    moduleId: module.id,
    templateUrl: './login.component.html'
})
export class LoginComponent {

    constructor(private router: RouterExtensions) {
    }

    doLogin() {
        this.router.navigate(['tabs-main'], {
            clearHistory: true,
            animated: false
        });
    }
}