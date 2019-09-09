import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalComponent } from './rental.component';
import { RentalCreateComponent } from './rental-create/rental-create.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalSearchComponent } from './rental-search/rental-search.component';
import { RentalUpdateComponent } from './rental-update/rental-update.component';



@NgModule({
  declarations: [RentalComponent, RentalCreateComponent, RentalDetailComponent, RentalListItemComponent, RentalListComponent, RentalSearchComponent, RentalUpdateComponent],
  imports: [
    CommonModule
  ]
})
export class RentalModule { }
