import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutsComponent } from './abouts.component';
import {AboutsHelpComponent} from './abouts-help/abouts-help.component';
import {AboutsProjectComponent} from './abouts-project/abouts-project.component';
const routes: Routes = [{
  path: '',
  component: AboutsComponent,
  children: [{
    path: 'help',
    component: AboutsHelpComponent,
  }, {
    path: 'project',
    component: AboutsProjectComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AboutsRoutingModule {

}

export const routedComponents = [
  AboutsComponent,
  AboutsHelpComponent,
  AboutsProjectComponent,
];
