import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LinksComponent } from './links/links.component';
import { SelectMyGroupComponent } from './select-my-group/select-my-group.component';
@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
    SelectMyGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot( [
      // {
      //   path: 'links',
      //   component: LinksComponent,
      // },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
