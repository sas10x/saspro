import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableImageComponent } from './editable-image/editable-image.component';
import { EditableInputComponent } from './editable-input/editable-input.component';
import { EditableSelectComponent } from './editable-select/editable-select.component';
import { EditableTextareaComponent } from './editable-textarea/editable-textarea.component';



@NgModule({
  declarations: [EditableImageComponent, EditableInputComponent, EditableSelectComponent, EditableTextareaComponent],
  imports: [
    CommonModule
  ]
})
export class EditableModule { }
