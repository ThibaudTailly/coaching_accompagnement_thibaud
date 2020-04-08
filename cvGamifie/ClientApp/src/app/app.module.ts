import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { RouterModule } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    CreatePageComponent,
    FetchDataComponent
  ],
  imports: [
    FormsModule,
    BrowserModule//.withServerTransition({ appId: 'ng-cli-universal' }),
    //RouterModule.forRoot([
    //  { path: '', component: HomeComponent, pathMatch: 'full' },
    //  { path: 'counter', component: CounterComponent },
    //  { path: 'fetch-data', component: FetchDataComponent },
    //  { path: 'create', component: CreatePageComponent },
    //])
    //NgbModule
    //HttpClientModule,
    //AngularFileUploaderModule,
    //FileUploadModule,
    //NgbModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
