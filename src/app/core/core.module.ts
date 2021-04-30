import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { PlayerService } from './services/http/player.service';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidenavComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [PlayerService],
  exports: [HeaderComponent, FooterComponent, SidenavComponent]
})
export class CoreModule { }
