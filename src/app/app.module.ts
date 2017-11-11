import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TreeComponentComponent} from './tree-component/tree-component.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';      
import {MatButtonModule} from '@angular/material/button';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToolbarEcoDirective } from './toolbar-eco.directive';
import { AppearsDirective } from './appears.directive';
import { FosseisComponent } from './fosseis/fosseis.component';
import { InsetosComponent } from './insetos/insetos.component';



const appRoutes: Routes = [
  {path: "trees", component: TreeComponentComponent },
  {path: "fosseis", component: FosseisComponent},
  {path: "insetos", component: InsetosComponent},
  {path: "", component: HomeComponent}
]
	

@NgModule({
  declarations: [
    AppComponent,
    TreeComponentComponent,
    HomeComponent,
    ToolbarEcoDirective,
    AppearsDirective,
    FosseisComponent,
    InsetosComponent
  ],
  imports: [
  	RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
