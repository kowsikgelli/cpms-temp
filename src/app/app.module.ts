import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NotificationComponent } from './components/notification/notification.component';
import { AutoOpenMenuComponent } from './components/auto-open-menu/auto-open-menu.component';
import { NotificationMobileViewComponent } from './components/notification-mobile-view/notification-mobile-view.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NotificationComponent, AutoOpenMenuComponent, NotificationMobileViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
