import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';
import { HeroButtonComponent } from './hero-buttons/hero-buttons.component';
import { ButtonsComponent } from './buttons.component';

const components = [
  ButtonsComponent,
  HeroButtonComponent,
];

@NgModule({
  imports: [
    ThemeModule,
  ],
  exports: [
    ...components,
  ],
  declarations: [
    ...components,
  ],
  providers: [],
})
export class ButtonsModule { }
