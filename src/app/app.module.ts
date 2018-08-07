import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TreeComponentComponent } from './tree-component/tree-component.component';
import { HttpClientModule } from '@angular/common/http';   
import {FormsModule} from '@angular/forms';  


import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';      
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material'
import {MatPaginatorModule} from '@angular/material/paginator';
import {LayoutModule} from '@angular/cdk/layout';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';


import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToolbarEcoDirective } from './toolbar-eco.directive';
import { AppearsDirective } from './appears.directive';
import { FosseisComponent } from './fosseis/fosseis.component';
import { InsetosComponent } from './insetos/insetos.component';
import { WebConsumerService } from './services/web-consumer.service';
import { TreeListComponent } from './tree-list/tree-list.component';
import { TreeDetailComponent } from './tree-detail/tree-detail.component';
import { MessageServiceService } from './services/message-service.service';
import { LogComponent } from './tree-component/dialogs/log/log.component';
import { InsetosListComponent } from './insetos/insetos-list/insetos-list.component';
import { FosseisListComponent } from './fosseis/fosseis-list/fosseis-list.component';
import { Config } from './settings/Config';
import { FosseisWebService } from './services/fosseis-web.service';
import { InsetosWebService } from './services/insetos-web.service';
import { ErrorPlugin } from './settings/ShowingErrors';
import { ConfirmDeleteComponent } from './dialogs/confirm-delete/confirm-delete.component';
import { TreeEditComponent } from './tree-component/tree-edit/tree-edit.component';
import { FossilEditComponent } from './fosseis/fossil-edit/fossil-edit.component';
import { InsetoEditComponent } from './inseto/inseto-edit/inseto-edit.component';
import { HistoriaComponent } from './historia/historia.component';
import { ListComponent } from './historia/list/list.component';
import { EditComponent } from './historia/edit/edit.component';
import { HistoriasService } from './services/historias.service';




const appRoutes: Routes = [
  {path: "trees", component: TreeComponentComponent },
  {path: "fosseis", component: FosseisComponent},
  {path: "insetos", component: InsetosComponent},
  {path: "treeEdit", component: TreeComponentComponent},
  {path: "fossilEdit", component: FossilEditComponent},
  {path: "historia", component: HistoriaComponent},
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
    InsetosComponent,
    TreeListComponent,
    TreeDetailComponent,
    LogComponent,
    InsetosListComponent,
    FosseisListComponent,
    ConfirmDeleteComponent,
    TreeEditComponent,
    FossilEditComponent,
    InsetoEditComponent,
    HistoriaComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
  	RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    LayoutModule,
    MatCardModule,
    FormsModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatListModule
  ],
  entryComponents: [
    LogComponent,
    ConfirmDeleteComponent
  ],
  providers: [WebConsumerService,FosseisWebService,InsetosWebService,MessageServiceService,HistoriasService, ErrorPlugin, Config],
  bootstrap: [AppComponent]
})



export class AppModule { 
  constructor(private _config: Config) {
    _config.setUrl("https://backeco.herokuapp.com/");
  }
}
