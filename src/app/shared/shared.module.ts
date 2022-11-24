import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HiighlightDirective } from './directives/hiighlight.directive';
import { BsButtonDirective } from './directives/bs-button.directive';

const components = [
  HeaderComponent,
  FooterComponent,
  HiighlightDirective,
  BsButtonDirective
]

@NgModule({
  declarations: [...components, BsButtonDirective],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class SharedModule { }
