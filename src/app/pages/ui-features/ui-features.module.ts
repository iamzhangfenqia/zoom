import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ButtonsModule } from './buttons/buttons.module';
import { UiFeaturesRoutingModule } from './ui-features-routing.module';
import { UiFeaturesComponent } from './ui-features.component';
import { ModalsComponent } from './modals/modals.component';
import { IconsComponent } from './icons/icons.component';
import { ModalComponent } from './modals/modal/modal.component';

const components = [
  UiFeaturesComponent,
  ModalsComponent,
  IconsComponent,
  ModalComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    UiFeaturesRoutingModule,
    ButtonsModule,
  ],
  declarations: [
    ...components,
  ],
  entryComponents: [
    ModalComponent,
  ],
})
export class UiFeaturesModule { }
