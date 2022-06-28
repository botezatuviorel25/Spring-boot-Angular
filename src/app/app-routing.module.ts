import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPachetComponent } from './add-pachet/add-pachet.component';
import { AddProgramareComponent } from './add-programare/add-programare.component';
import { AddServiciuComponent } from './add-serviciu/add-serviciu.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModificareConfirmareComponent } from './modificare-confirmare/modificare-confirmare.component';
import { PachetListComponent } from './pachet-list/pachet-list.component';
import { ProgramareListComponent } from './programare-list/programare-list.component';
import { ProgramarileMeleListComponent } from './programarile-mele-list/programarile-mele-list.component';
import { ServiciiListComponent } from './servicii-list/servicii-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path: 'user-list', component: UserListComponent},
  {path: 'serv-list', component: ServiciiListComponent},
  {path: 'pachet-list', component: PachetListComponent},
  {path: 'programare-list', component: ProgramareListComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'add-serv', component: AddServiciuComponent},
  {path: 'add-pachet', component: AddPachetComponent},
  {path: 'add-programare', component: AddProgramareComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'confirmare-admin', component: ModificareConfirmareComponent},
  {path: 'programarile-mele', component: ProgramarileMeleListComponent},
  {path: 'modificare-confirmare', component: ModificareConfirmareComponent},
  {path: 'sign-up', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
