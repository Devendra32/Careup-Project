import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './careup/components/user-details/user-details.component';
import { UserComponent } from './careup/components/user/user.component';
import { UserListComponent } from './careup/components/user-list/user-list.component';
import { CareupHomeComponent } from './careup/components/careup-home/careup-home.component';
import { AddRoleComponent } from './careup/components/add-role/add-role.component';
import { NavbarComponent } from './careup/components/navbar/navbar.component';
import { UserUpdateComponent } from './careup/components/user-update/user-update.component';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UserListComponent,
        CareupHomeComponent,
        AddRoleComponent,
        NavbarComponent,
        UserUpdateComponent,
        UserDetailsComponent
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
