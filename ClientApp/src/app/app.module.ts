import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule,MatInputModule,MatSelectModule,MatNativeDateModule} from '@angular/material';
import {MatOptionModule} from '@angular/material/';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

import { FullCalendarModule } from '@fullcalendar/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { EVCComponent } from './evc/evc.component';
import { ContentComponent } from './content/content.component';
import { VacationFormComponent } from './vacation-form/vacation-form.component';
import { CalendarService } from './calendar.service';
import { OverviewComponent } from './overview/overview.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainNavComponent } from './main-nav/main-nav.component';

const appRoutes:Routes =[
  {path:"planner", component:ContentComponent},
  {path:"", component:OverviewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EVCComponent,
    ContentComponent,
    VacationFormComponent,
    OverviewComponent,
    SidenavComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatDatepickerModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent]
})


export class AppModule { }
