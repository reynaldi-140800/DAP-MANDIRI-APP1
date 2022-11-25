import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HiighlightDirective } from './directives/hiighlight.directive';
import { BsButtonDirective } from './directives/bs-button.directive';
import { DateCustomPipe } from './directives/date-custom.pipe';
import { BadgeCustomPipe } from './directives/badge-custom.pipe';

const components = [
  HeaderComponent,
  FooterComponent,
  HiighlightDirective,
  BsButtonDirective,
  DateCustomPipe
]

@NgModule({
  declarations: [...components, BadgeCustomPipe],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class SharedModule { }
