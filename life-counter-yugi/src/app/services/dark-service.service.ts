import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DarkServiceService {

  darkService: boolean = true;
  private readonly THEME_KEY = 'theme';

  constructor(private platform: Platform) {this.loadTheme() }

  public changeTheme() {
    this.darkService = !this.darkService;
    if (this.darkService) {
      this.setTheme('dark');
      this.platform.is('ios') ? document.body.classList.remove('light-ios') : document.body.classList.remove('light-android');
      this.platform.is('ios') ? document.body.classList.add('dark-ios') : document.body.classList.add('dark-android');
    }
    else {
      this.setTheme('light');
      this.platform.is('ios') ? document.body.classList.remove('dark-ios') : document.body.classList.remove('dark-android');
      this.platform.is('ios') ? document.body.classList.add('light-ios') : document.body.classList.add('light-android');
    }
    console.log('changed')
  }

  private setTheme(theme: string) {
    localStorage.setItem(this.THEME_KEY, theme);
  }

  private loadTheme() {
    let savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme === 'dark') {
      this.darkService = true;
      this.platform.is('ios') ? document.body.classList.add('dark-ios') : document.body.classList.add('dark-android');
    } else {
      this.darkService = false;
      this.platform.is('ios') ? document.body.classList.add('light-ios') : document.body.classList.add('light-android');
    }
  }
}
