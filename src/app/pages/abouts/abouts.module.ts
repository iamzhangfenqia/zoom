import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import {AboutsRoutingModule, routedComponents} from './abouts-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    AboutsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class AboutsModule { }
