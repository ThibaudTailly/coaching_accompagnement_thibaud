import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTrainingComponent } from './create-training/create-training.component';
import { HomeTrainingComponent } from './home-training/home-training.component';
import { TrainingRoutingModule } from './routes/training-routing/training-routing.module';

@NgModule({
  declarations: [
    CreateTrainingComponent,
    HomeTrainingComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule
  ]
})
export class TrainingModule { }
