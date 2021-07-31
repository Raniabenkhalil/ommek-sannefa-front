import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  ArticlesUrl: string = ' http://localhost:8000/article/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getArticle(): Observable<any> {
    return this.http.get(this.ArticlesUrl, this.httpOptions);
  }
  getArticleById(id: any): Observable<any> {
    return this.http.get(this.ArticlesUrl + '' + id, this.httpOptions);
  }
  addArticle(articel: any): Observable<any> {
    return this.http.post(this.ArticlesUrl + 'new', articel, this.httpOptions);
  }
  uploadimage(articel: any): Observable<any> {
    return this.http.post(this.ArticlesUrl + 'upload', articel);
  }
  updateArticle(id: number, articel: any): Observable<any> {
    return this.http.put(
      this.ArticlesUrl + '' + id + '/edit',
      articel,
      this.httpOptions
    );
  }
  deleteArticle(u: any | number): Observable<any> {
    const id = typeof u === 'number' ? u : u.id;
    const url = this.ArticlesUrl + 'delete/' + id;
    return this.http.delete(url);
  }
}
