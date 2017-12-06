import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatSnackBarModule, MatIconModule, MatListModule, MatTooltipModule, MatCardModule, MatButtonModule,
         MatToolbarModule, MatInputModule, MatSlideToggleModule, MatMenuModule } from '@angular/material';

import { CovalentLoadingModule, CovalentDialogsModule, CovalentMediaModule, CovalentLayoutModule,
         CovalentSearchModule, CovalentCommonModule } from '@covalent/core';

import { UsersComponent } from './users.component';
import { UsersFormComponent } from './form/form.component';

import { userRoutes } from './users.routes';

import { UserService, IUser } from '../../services/user.service';

export { UsersComponent, UsersFormComponent, UserService, IUser };

@NgModule({
  declarations: [
    UsersComponent,
    UsersFormComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    // angular modules
    CommonModule,
    FormsModule,
    RouterModule,
    // material modules
    MatSnackBarModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSlideToggleModule,
    MatMenuModule,
    // covalent modules
    CovalentLoadingModule,
    CovalentDialogsModule,
    CovalentMediaModule,
    CovalentLayoutModule,
    CovalentSearchModule,
    CovalentCommonModule,
    // extra
    userRoutes,
  ], // modules needed to run this module
  providers: [
  ],
})
export class UsersModule {}
