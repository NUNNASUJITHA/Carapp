import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';
import { ProfileComponent } from './profile/profile.component';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes = [


  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"upload",component:UploadComponent},
  {path:"display",component:DisplayComponent},
  {path:"profile",component:ProfileComponent},
  {path:"delete",component:DeleteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
