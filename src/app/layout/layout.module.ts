import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    MainLayoutComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [MainLayoutComponent]
})
export class LayoutModule {}
