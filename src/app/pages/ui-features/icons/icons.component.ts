import { Component } from '@angular/core';

@Component({
  selector: 'ngx-icons',
  styleUrls: ['./icons.component.scss'],
  templateUrl: './icons.component.html',
})
export class IconsComponent {

  icons = {
    ionicons: [
      'ion-ionic', 'ion-arrow-right-b', 'ion-arrow-down-b', 'ion-arrow-left-b', 'ion-arrow-up-c', 'ion-arrow-right-c',
    ],
  };

}
