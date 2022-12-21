import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareupHomeComponent } from './careup/careup-home/careup-home.component';
import { UserListComponent } from './careup/user-list/user-list.component';
import { UserComponent } from './careup/user/user.component';
import { UpdateUserComponent } from './careup/update-user/update-user.component';
import { AddRoleComponent } from './add-role/add-role.component';


const routes: Routes = [
  {path: 'home', component:CareupHomeComponent},
  {path:'add-user',component:UserComponent},
  {path:'users',component:UserListComponent},
  {path:'update-user',component:UpdateUserComponent},
  {path:'add-role',component:AddRoleComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
