import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [UserComponent, UserDetailComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
