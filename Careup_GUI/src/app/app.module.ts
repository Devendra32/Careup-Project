import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './careup/user/user.component';
import { UserListComponent } from './careup/user-list/user-list.component';
import { CareupHomeComponent } from './careup/careup-home/careup-home.component';
import { UpdateUserComponent } from './careup/update-user/update-user.component';
import { AddRoleComponent } from './careup/add-role/add-role.component';
import { NavbarComponent } from './careup/navbar/navbar.component';


@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UserListComponent,
        CareupHomeComponent,
        UpdateUserComponent,
        AddRoleComponent,
        NavbarComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
