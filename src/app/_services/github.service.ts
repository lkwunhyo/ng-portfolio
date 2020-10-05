import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl: string = 'https://api.github.com';
  private user: string = 'lkwunhyo';

  public gitHubUser: Observable<any>;

  constructor(private http: HttpClient) { }

  getGitHubAccount() {
    return this.http.get<any>(`${this.baseUrl}/users/${this.user}`).pipe(
      map(account => {
        return account;
      }),
      catchError(this.handleError)
    );
  }

  getRepos() {
    return this.http.get<any>(`${this.baseUrl}/users/${this.user}/repos`).pipe(
      map(repos => {
        console.log(repos[repos.length - 1]);
        return repos[repos.length - 1];
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Node.js server error');
  }
}
