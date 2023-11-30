import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { SearchComponent } from './search/search.component';
import { Custom2Directive } from './custom2.directive';
import { SetBackGroundColorBlueDirective } from './customDirectives/set-back-ground-color-blue.directive';
import { ClassDirective } from './customDirectives/class.directive';
import { StructuralExampleDirective } from './customDirectives/structural-example.directive';
import { CardDetailsComponent } from './card-details/card-details.component';
import { TestmoduleModule } from './testmodule/testmodule.module';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UpdateComponent,
    TestComponent,
    Test2Component,
    SearchComponent,
    Custom2Directive,
    SetBackGroundColorBlueDirective,
    ClassDirective,
    StructuralExampleDirective,
    CardDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TestmoduleModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'increasing',
      easing: '1000',
      easeTime: '500',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
