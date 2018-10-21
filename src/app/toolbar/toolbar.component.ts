import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() isLoggedIn = false;

  @Output('onToggleSidebarClicked') onToggleSidebarClicked = new EventEmitter();
  @Output('onLoginClicked') onLoginClicked = new EventEmitter();
  @Output('onLogoutClicked') onLogoutClicked = new EventEmitter();

  constructor() {}

  toggleSidebar() {
    this.onToggleSidebarClicked.emit();
  }

  login() {
    this.onLoginClicked.emit();
  }

  logout() {
    this.onLogoutClicked.emit();
  }

  ngOnInit() {
  }

}
