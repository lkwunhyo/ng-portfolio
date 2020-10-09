import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../_services/github.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  gitHubAccount$: any;

  constructor(private gitService: GithubService) { }

  ngOnInit(): void {
    this.gitHubAccount$ = this.gitService.getGitHubAccount();
  }

}
