import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCreateComponent } from './profile-create/profile-create.component';
import { ProfileDeleteComponent } from './profile-delete/profile-delete.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileSelectComponent } from './profile-select/profile-select.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'app-profile-select/:employees.id', component: ProfileSelectComponent },
  { path: 'app-profile-edit/:employees.id', component: ProfileEditComponent },
  { path: 'app-profile-create', component: ProfileCreateComponent },
  { path: 'app-profile-delete', component: ProfileDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
