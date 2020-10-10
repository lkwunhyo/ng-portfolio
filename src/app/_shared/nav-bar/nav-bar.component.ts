import { _ParseAST } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  colorThemes = {
    '': '../../../assets/icons/Nav/sunny-outline.svg',
    'dark-mode': '../../../assets/icons/Nav/cloudy-night-outline.svg',
    'forest-green': '../../../assets/icons/Nav/leaf-outline.svg',
    'lemon-yellow': '../../../assets/icons/Nav/flash-outline.svg'
  };
  currentTheme: any;
  nextTheme: any;   // For navigation theme button

  constructor() { }

  ngOnInit(): void {
    this.currentTheme = Object.entries(this.colorThemes)[0];
    this.nextTheme = Object.entries(this.colorThemes)[1];
  }

  colorModeClick() {
    let entries = Object.entries(this.colorThemes);
    let currentIndex = entries.findIndex(x => x[0] == this.currentTheme[0]);
    this.currentTheme = currentIndex < entries.length - 1 ? entries[currentIndex + 1] : entries[0];

    let nextIndex = entries.findIndex(x => x[0] == this.currentTheme[0]);
    this.nextTheme = nextIndex < entries.length - 1 ? entries[nextIndex + 1] : entries[0];
    console.log(currentIndex + ' ' + entries.length);

    document.body.removeAttribute('class');
    if (currentIndex !== 3) document.body.classList.toggle(this.currentTheme[0]);
  }

}
