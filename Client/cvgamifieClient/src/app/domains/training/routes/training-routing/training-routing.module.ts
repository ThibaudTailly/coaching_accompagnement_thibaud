import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateTrainingComponent } from 'src/app/domains/training/create-training/create-training.component';
import { HomeTrainingComponent } from 'src/app/domains/training/home-training/home-training.component';

// TODO: 09/04/2020, B.3 Voir pour créer une route du type : /training/create et /training/update

const routes: Routes = [
  { path: 'training/create', component: CreateTrainingComponent } // TODO: 08/04/2020, B.2. Comment déporter ce create dans le module CreatingTrainingModule avec une gestion de sous route
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
