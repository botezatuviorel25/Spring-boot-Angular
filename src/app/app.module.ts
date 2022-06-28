import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from 'src/services/user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { ServiciiListComponent } from './servicii-list/servicii-list.component';
import { PachetListComponent } from './pachet-list/pachet-list.component';
import { ProgramareListComponent } from './programare-list/programare-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { AddServiciuComponent } from './add-serviciu/add-serviciu.component';
import { AddPachetComponent } from './add-pachet/add-pachet.component';
import { AddProgramareComponent } from './add-programare/add-programare.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ModificareConfirmareComponent } from './modificare-confirmare/modificare-confirmare.component';
import { ProgramarileMeleListComponent } from './programarile-mele-list/programarile-mele-list.component';
import { DatePipe } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ServiciiListComponent,
    PachetListComponent,
    ProgramareListComponent,
    AddUserComponent,
    AddServiciuComponent,
    AddPachetComponent,
    AddProgramareComponent,
    LoginComponent,
    HomeComponent,
    ModificareConfirmareComponent,
    ProgramarileMeleListComponent,
    SignUpComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    
    
    
   
   
  ],
  providers: [LoginComponent, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
