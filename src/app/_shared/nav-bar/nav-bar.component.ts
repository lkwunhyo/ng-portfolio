import { _ParseAST } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { faMoon, faLemon } from '@fortawesome/free-regular-svg-icons';
import { faAdjust, faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  colorThemes = {
    '': faAdjust,
    'dark-mode': faMoon,
    'forest-green': faLeaf,
    'lemon-yellow': faLemon
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
    this.nextTheme = currentIndex + 1 < entries.length - 1 ? entries[currentIndex + 2] : entries[0];

    document.body.removeAttribute('class');
    document.body.classList.toggle(this.currentTheme[0]);
  }

}
