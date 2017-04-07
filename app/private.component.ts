import {Component} from 'angular2/core';
import {AuthenticationService} from './authentication.service'
import {todoAppComponent} from './todo.component'

@Component({
    selector: 'login-form',
    providers: [AuthenticationService]
    template: `
            <div class="container" >
                <div class="content">
                    <span>Congratulations, you have successfully logged in!!</span>
                    <br />
                    <a (click)="logout()" href="#">Click Here to logout</a><br/><br/>
                    <a  href="/todoapp">Click Here to for toDo app</a><br/><br/>
                </div>
            </div>
    	`
})

export class PrivateComponent {

    constructor(
        private _service:AuthenticationService){}

    ngOnInit(){
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}