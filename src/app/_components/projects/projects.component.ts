import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../_services/github.service';

import { Project } from '../../_models/project';
import { PROJECTS } from './_projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  yearSpan;
  projects: Project[];

  constructor(private gitService: GithubService) { }

  ngOnInit(): void {
    this.projects = this.getRepos();
    this.yearSpan = this.projects.map(item => item.created.getFullYear()).filter(this.getDistinct);
    console.log(this.yearSpan);
  }

  getRepos() {
    return PROJECTS.sort((a, b) => {
      return <any>new Date(b.created) - <any>new Date(a.created);
    })
  }

  getDistinct(value, index, self) {
    return self.indexOf(value) === index;
  }

}
