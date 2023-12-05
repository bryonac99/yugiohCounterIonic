import { DarkServiceService } from './services/dark-service.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Info', url: '/folder/info', icon: 'information' }
  ];
  constructor(private darkService: DarkServiceService) {}

  changeTheme() {
    this.darkService.changeTheme();
  }

}
