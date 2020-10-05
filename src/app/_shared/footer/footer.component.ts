import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../_services/github.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  repos$;

  constructor(private gitService: GithubService) { }

  ngOnInit(): void {
    this.repos$ = this.getRepos();
  }

  getRepos() {
    return this.gitService.getRepos();
  }

}
