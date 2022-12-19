import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './careup/user/user.component';
import { NavbarComponent } from './careup/navbar/navbar.component';
import { UserListComponent } from './careup/user-list/user-list.component';
import { CareupHomeComponent } from './careup/careup-home/careup-home.component';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        NavbarComponent,
        UserListComponent,
        CareupHomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ]
})
export class AppModule { }
