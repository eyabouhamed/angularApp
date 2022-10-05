import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { EventsComponent } from './events/events.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { MembersComponent } from './members/members.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [

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
    path: '**',
    redirectTo: "/",

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
