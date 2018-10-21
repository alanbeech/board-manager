import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.scss']
})
export class MenuToolbarComponent implements OnInit {
  @Output('onCloseSidebarClicked') onCloseSidebarClicked = new EventEmitter();

  constructor() { }

  closeMenu() {
    this.onCloseSidebarClicked.emit();
  }

  ngOnInit() {
  }

}
