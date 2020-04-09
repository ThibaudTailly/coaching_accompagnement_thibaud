import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TrainingModule } from 'src/app/domains/training/training.module';
import { AppComponent } from '../containers/app/app.component';
import { AppRoutingModule } from '../routes/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,

    //CreateTrainingComponent // TODO: 08/04/2020, A.1. Enlever cet appel, et que ça fonctionne quand même avec le TrainingModule
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    TrainingModule
    // TODO: 08/04/2020, A.2. Faire fonctionner ça : TrainingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
