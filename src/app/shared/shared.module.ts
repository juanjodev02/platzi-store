import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    PageNotFoundComponent,
    HighlightDirective,
    ExponentialPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    PageNotFoundComponent,
    HighlightDirective,
    ExponentialPipe
  ]
})
export class SharedModule { }
