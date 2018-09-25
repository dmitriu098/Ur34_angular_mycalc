import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ColorTitleDirective } from './color-title.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, ColorTitleDirective],
  exports: [HeaderComponent]
})
export class HeaderModule { }
