import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HiighlightDirective } from './directives/hiighlight.directive';
import { BsButtonDirective } from './directives/bs-button.directive';
import { DateCustomPipe } from './directives/date-custom.pipe';
import { BadgeCustomPipe } from './directives/badge-custom.pipe';
import { ValidationMessageComponent } from './components/validation-message/validation-message.component';
import { StringUtil } from './utils/string.util';

const components = [
  HeaderComponent,
  FooterComponent,
  HiighlightDirective,
  BsButtonDirective,
  DateCustomPipe,
  ValidationMessageComponent,
  BadgeCustomPipe
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [...components],
  providers:[StringUtil]
})
export class SharedModule { }
