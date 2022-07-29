import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, CardModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
