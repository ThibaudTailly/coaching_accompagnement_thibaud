import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// TODO: 08/04/2020, B.1. Comment réussir à avoir ici, les routes globales à mon application
//                 , Et dans les sous modules, les routes spécifiques à mon sous module

const routes: Routes = [
];
    //  { path: 'counter', component: CounterComponent },
    //  { path: 'fetch-data', component: FetchDataComponent },
    //  { path: 'create', component: CreatePageComponent },

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
