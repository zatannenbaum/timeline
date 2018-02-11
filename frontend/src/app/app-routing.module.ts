import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';


import { AuthGuardService } from './authguard.service';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'timeline', component: TimelineComponent, canActivate: [AuthGuardService] },
  { path: 'edit/:uuid', component: EditPostComponent, canActivate: [AuthGuardService] },
  { path: 'add_post', component: AddPostComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
