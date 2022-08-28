import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListInlineComponent } from './user-list-inline/user-list-inline.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TodolistComponent } from './todolist/todolist.component';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Child2Component } from './child2/child2.component';
import { PipeEgComponent } from './pipe-eg/pipe-eg.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { FormTutorialComponentComponent } from './form-tutorial-component/form-tutorial-component.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RedElDirective } from './directiveDirectory/red-el.directive';
import { ServiceExampleComponentOneComponent } from './service-example-component-one/service-example-component-one.component';
import { ServiceExampleComponentTwoComponent } from './service-example-component-two/service-example-component-two.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserListComponent,
    UserListInlineComponent,
    StudentListComponent,
    CountryListComponent,
    HeaderComponent,
    TodolistComponent,
    ChildComponent,
    UserDetailsComponent,
    Child2Component,
    PipeEgComponent,
    UsdInrPipe,
    FormTutorialComponentComponent,
    ReactiveFormComponent,
    RedElDirective,
    ServiceExampleComponentOneComponent,
    ServiceExampleComponentTwoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatBadgeModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
