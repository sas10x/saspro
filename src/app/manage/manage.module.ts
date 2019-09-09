import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { ManageRentalComponent } from './manage-rental/manage-rental.component';



@NgModule({
  declarations: [ManageComponent, ManageBookingComponent, ManageRentalComponent],
  imports: [
    CommonModule
  ]
})
export class ManageModule { }
