import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  
  {path:'members',
  pathMatch:'full',
  component:MembersComponent,
},

  {path:'create',
  pathMatch:'full',
  component:MemberFormComponent,},

  {path:'**',
  redirectTo:"/",

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }