import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from '../models/review.model'
const httpOptions = {
  headers: new HttpHeaders({
    'Content- Type': 'application/json'
  }
  )
};

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  apiURL: string = 'http://localhost:8000/api/reviews'
  review: Review[];

  constructor(private http: HttpClient) { }

  listReview(): Observable<Review> {
    return this.http.get<Review>(this.apiURL);

  }

  addReview(r: Review,id): Observable<Review> {
    return this.http.post<Review>(this.apiURL, {...r,recipe:`api/recipes/${id}`});
  }
  getReviewById(id): Observable<Review> {
    return this.http.get<Review>(`${this.apiURL}/${id}`);

  }
  deleteReview(id) : Observable<any> {
    return this.http.delete('http://127.0.0.1:8000/api/reviews/'+id);
  };

  updateReview(reviewid,body) : Observable<any> {
    return this.http.put(`http://127.0.0.1:8000/api/reviews/`+ reviewid, body);
  }
  getCurrentData(id){
    return this.http.get(`http://127.0.0.1:8000/api/reviews/`+ id)
  }

}






