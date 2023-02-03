import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MonthlyHoursComponent } from './monthly-hours/monthly-hours.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'monthly-hours',
    component: MonthlyHoursComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
