import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menuitem';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dockItems: MenuItem[];

  ngOnInit() {
      this.dockItems = [
          {
              label: 'Finder',
              icon: "assets/showcase/images/dock/engrenagem.png",
          },
          {
              label: 'App Store',
              icon: "assets/showcase/images/dock/course.png"
          },
          {
              label: 'Photos',
              icon: "assets/showcase/images/dock/video.png"
          },
          {
              label: 'Trash',
              icon: "assets/showcase/images/dock/chat.png"
          },
          {
            label: 'Trash',
            icon: "assets/showcase/images/dock/exercicio.png"
          },
          {
            label: 'Trash',
            icon: "assets/showcase/images/dock/calendar.png"
          }
      ];

  }


}
