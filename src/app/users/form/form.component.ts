import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSnackBar } from '@angular/material';

import { TdDialogService, TdLoadingService } from '@covalent/core';

import { UserService, IUser } from '../../../services/user.service';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'qs-user-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class UsersFormComponent implements OnInit {

  displayName: string;
  email: string;
  id: number;
  admin: boolean;
  user: IUser;
  action: string;

  constructor(private _userService: UserService,
              private _router: Router,
              private _route: ActivatedRoute,
              private _snackBarService: MatSnackBar,
              private _loadingService: TdLoadingService,
              private _dialogService: TdDialogService) {}

  goBack(): void {
    this._router.navigate(['/users']);
  }

  ngOnInit(): void {
    this._route.url.subscribe((url: any) => {
      this.action = (url.length > 1 ? url[1].path : 'add');
    });
    this._route.params.subscribe((params: {id: number}) => {
      this.id = params.id;
      if (this.id) {
        this.load();
      }
    });
  }

  async load(): Promise<void> {
    try {
      this._loadingService.register('user.form');
      let user: IUser = await this._userService.get(this.id).toPromise();
      this.displayName = user.displayName;
      this.email = user.email;
      this.admin = (user.siteAdmin === 1 ? true : false);
    } catch (error) {
      this._dialogService.openAlert({message: 'There was an error loading the user'});
    } finally {
      this._loadingService.resolve('user.form');
    }
  }

  async save(): Promise<void> {
    try {
      this._loadingService.register('user.form');
      let siteAdmin: number = (this.admin ? 1 : 0);
      let now: Date = new Date();
      this.user = {
        displayName: this.displayName,
        email: this.email,
        siteAdmin: siteAdmin,
        id: this.id ,
        created: now,
        lastAccess: now,
      };
      if (this.action === 'add') {
        await this._userService.create(this.user).toPromise();
      } else {
        await this._userService.update( this.user).toPromise();
      }
      this._snackBarService.open('User Saved', 'Ok');
      this.goBack();
    } catch (error) {
      this._dialogService.openAlert({message: 'There was an error saving the user'});
    } finally {
      this._loadingService.resolve('user.form');
    }
  }
}
