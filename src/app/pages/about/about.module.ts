import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { ThemeModule } from '../../@theme/theme.module';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    AboutRoutingModule
  ],
  declarations: []
})
export class AboutModule { }