import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';
import { PipesModule } from './pipes/pipes.module';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './reducers/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AboutComponent
  ],
  imports: [
    HttpModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: ListComponent, pathMatch: 'full'},
      { path: 'about', component: AboutComponent, pathMatch: 'full'},
      { path: 'details/:id', loadChildren: './details/details.module#DetailsModule'},
    ]),
    PipesModule,
    StoreModule.forRoot({
      app: appReducer,
    }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
