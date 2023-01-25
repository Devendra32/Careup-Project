import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareupHomeComponent } from './careup/components/careup-home/careup-home.component';
import { UserListComponent } from './careup/components/user-list/user-list.component';
import { UserComponent } from './careup/components/user/user.component';
import { AddRoleComponent } from './careup/components/add-role/add-role.component';
import { UserUpdateComponent } from './careup/components/user-update/user-update.component';
import { UserDetailsComponent } from './careup/components/user-details/user-details.component';


const routes: Routes = [
  {path: 'home', component:CareupHomeComponent},
  {path:'add-user',component:UserComponent},
  {path:'users',component:UserListComponent},
  {path:'add-role',component:AddRoleComponent},
  {path:'user/:id',component:UserUpdateComponent},
  {path:'app-user-details/:id',component:UserDetailsComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
