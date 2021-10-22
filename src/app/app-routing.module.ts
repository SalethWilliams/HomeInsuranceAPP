import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './completed/completed.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HomeStructureDetailsComponent } from './home-structure-details/home-structure-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-structure-details', pathMatch: 'full' },
  { path: 'home-structure-details', component: HomeStructureDetailsComponent },

  { path: '', redirectTo: '/Get-started', pathMatch: 'full' },
  { path: 'get-started', component: GetStartedComponent },

  { path: '', redirectTo: '/completed', pathMatch: 'full' },
  { path: 'completed', component: CompletedComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
