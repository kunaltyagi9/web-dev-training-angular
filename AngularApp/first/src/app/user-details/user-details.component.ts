import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { IUser } from '../user';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

    user$: Observable<IUser>;
    userID: number;

    constructor(private _userService: UserService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.userID = params.userId;
        });
    }

    ngOnInit() {
        this.user$ = this._userService.getUser(this.userID);
    }

}



