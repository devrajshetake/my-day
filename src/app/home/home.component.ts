import { Component } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';


@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
export class HomeComponent {
    user: User | null;

    avatarType: string = 'pixel-art';

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }

    setAvatarType = (type: string) => {
        this.avatarType = type;
    }
}