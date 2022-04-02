import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TimerService } from './timer.service';
import { TimeComponent } from './time/time.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { DisciplinasService } from './disciplinas.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'time', component: TimeComponent },
      { path: 'disciplinas', component: DisciplinasComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    TimeComponent,
    DisciplinasComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TimerService, DisciplinasService],
})
export class AppModule {}
