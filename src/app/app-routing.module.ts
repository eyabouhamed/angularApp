import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffectComponent } from './affect/affect.component';
import { ArticlesComponent } from './articles/articles.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { MembersComponent } from './members/members.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',

  },

  {
    path: 'members',
    pathMatch: 'full',
    component: MembersComponent,
  },

  {
    path: 'create',
    pathMatch: 'full',
    component: MemberFormComponent,
  },

  {
    path: 'members/:id/edit',
    pathMatch: 'full',
    component: MemberFormComponent,
  },

  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboradComponent,
  },
  {
    path: 'tools',
    pathMatch: 'full',
    component: ToolsComponent,
  },
  {
    path: 'Events',
    pathMatch: 'full',
    component: EventsComponent,
  },
  {
    path: 'articles',
    pathMatch: 'full',
    component: ArticlesComponent,
  },

  {
    path: 'articles/:idArt/affect',
    pathMatch: 'full',
    component: AffectComponent,
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
   
  },
  {
    path: '**',
    redirectTo: "/",

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
