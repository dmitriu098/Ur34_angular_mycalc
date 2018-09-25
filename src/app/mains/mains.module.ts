import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainsComponent } from './mains/mains.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MainsComponent],
  exports: [MainsComponent]
})
export class MainsModule { }
