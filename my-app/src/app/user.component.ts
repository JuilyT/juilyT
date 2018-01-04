import {Component} from '@angular/core';
import {User} from './models/user';
import {UserService} from './services/user.service';

@Component({
    selector:'users',
    templateUrl:'./users.html',
    styleUrls: ['./users.css'],
    providers:[UserService]
})
export class UserComponent {
    users: User[];
    constructor(private userService:UserService) {
        userService.getUsers().subscribe(p=>this.users = p);
    }
}