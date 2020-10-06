import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../_services/github.service';

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

  gitHubAccount$: any;


  constructor(private gitService: GithubService) { }

  ngOnInit(): void {
    this.gitHubAccount$ = this.gitService.getGitHubAccount();
  }

}
