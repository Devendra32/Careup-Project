import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './careup/user/user.component';
import { UserListComponent } from './careup/user-list/user-list.component';
import { CareupHomeComponent } from './careup/careup-home/careup-home.component';
import { UpdateUserComponent } from './careup/update-user/update-user.component';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UserListComponent,
        CareupHomeComponent,
        UpdateUserComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ]
})
export class AppModule { }
