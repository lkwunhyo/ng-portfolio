import { Component, OnInit } from '@angular/core';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  colorMode: any = faMoon;

  constructor() { }

  ngOnInit(): void {
  }

  colorModeClick() {
    this.colorMode = this.colorMode === faMoon ? faSun : faMoon;
    document.body.classList.toggle('dark-mode');
  }

}
