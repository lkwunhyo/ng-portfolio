import { Component, OnInit } from '@angular/core';
import {
  faAngular, faReact, faHtml5, faCss3, faJsSquare, faSass,
  faNodeJs,
  faBootstrap, faGithub, faBitbucket, faJira, faAws
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  /* Front End */
  faAngular = faAngular;
  faReact = faReact;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faJs = faJsSquare;
  faSass = faSass;

  /* Back End */
  faNode = faNodeJs;

  /* Tools */
  faBootstrap = faBootstrap;
  faGit = faGithub;
  faBit = faBitbucket;
  faJira = faJira;
  faAws = faAws;



  constructor() { }

  ngOnInit(): void {
  }

}
