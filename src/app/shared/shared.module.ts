import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { RouterModule } from '@angular/router';
import { HighlightDirective } from './directive/highlight.directive';
import { BsButtonDirective } from './directive/bs-button.directive';
import { DateCustomPipe } from './pipes/date-custom.pipe';
import { ValidationMessageComponent } from './components/validation-message/validation-message.component';
import { StringUtil } from './utils/string.util.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HighlightDirective,
    BsButtonDirective,
    DateCustomPipe,
    ValidationMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    BsButtonDirective,
    DateCustomPipe,
    ValidationMessageComponent,
  ],
  providers:[StringUtil]
})
export class SharedModule { }
