import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { KolumneComponent } from './components/kolumne/kolumne.component';


const routes: Routes = [
  {
    path: 'whats-up-today',
    component: HomeComponent
  },
  {
    path: 'dont-go-crazy',
    component: KolumneComponent
  },
  {
    path: '',
    component: LandingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
