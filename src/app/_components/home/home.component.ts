import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../_services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gitHubAccount$;

  constructor(private gitService: GithubService) { }

  ngOnInit(): void {
    this.gitHubAccount$ = this.getGitHubAccount();
  }

  getGitHubAccount() {
    return this.gitService.getGitHubAccount();
  }

}
