import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { EtudiantsComponent } from './members/etudiants/etudiants.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MemberFormComponent } from './member-form/member-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LayoutComponent } from './layout/layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { ArticlesComponent } from './articles/articles.component';
import { AffectComponent } from './affect/affect.component';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import {FirebaseModule} from '../app/Firebase.module';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';

 
@NgModule({
 
  declarations: [
    AppComponent,
    MembersComponent,
    EtudiantsComponent,
    MemberFormComponent,
    ConfirmDialogComponent,
    LayoutComponent,
    ArticlesComponent,
    AffectComponent,
    LoginComponent
    
  ],
  imports: [
    MatNativeDateModule,
    MatDatepickerModule,
     FirebaseModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
