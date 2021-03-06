import {Component} from 'angular2/core';
import {LoginComponent} from './login.component';
import {PrivateComponent} from './private.component';
import {todoAppComponent} from './todo.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-app',
    directives: [LoginComponent,todoAppComponent,ROUTER_DIRECTIVES],
    template: `
            <router-outlet></router-outlet>
        `
})
@RouteConfig([
    { path: '/home', name: 'Home', component: PrivateComponent, useAsDefault:true },
    { path: '/login', name: 'Login', component: LoginComponent }
    { path: '/todoapp', name: 'Todoapp', component: todoAppComponent }
])
export class AppComponent {}

