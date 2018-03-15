import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalyseComponent } from './analyse.component';
import { D3Component } from './d3/d3.component';
import {UrlComponent} from './url/url.component';
import {ArticleComponent} from './article/article.component';

const routes: Routes = [{
  path: '',
  component: AnalyseComponent,
  children: [{
    path: 'url',
    component: UrlComponent,
  }, {
    path: 'd3',
    component: D3Component,
  }, {
    path: 'article',
    component: ArticleComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyseRoutingModule { }

export const routedComponents = [
  AnalyseComponent,
  UrlComponent,
  ArticleComponent,
  D3Component,
];
