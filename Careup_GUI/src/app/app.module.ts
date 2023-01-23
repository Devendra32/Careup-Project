import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { UserComponent } from './careup/user/user.component';
import { UserListComponent } from './careup/user-list/user-list.component';
import { CareupHomeComponent } from './careup/careup-home/careup-home.component';
import { AddRoleComponent } from './careup/add-role/add-role.component';
import { NavbarComponent } from './careup/navbar/navbar.component';
import { UserUpdateComponent } from './careup/user-update/user-update.component';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UserListComponent,
        CareupHomeComponent,
        AddRoleComponent,
        NavbarComponent,
        UserUpdateComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class AppModule { }
