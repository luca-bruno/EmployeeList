import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileSelectComponent } from './profile-select/profile-select.component';
import { ProfileCreateComponent } from './profile-create/profile-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileEditComponent,
    ProfileSelectComponent,
    ProfileCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
