import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Claim } from '../models/claim.model';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  /**
   * Service class to communicate with the REST services
   */

  constructor(private httpClient: HttpClient) {}
  save(body?: Claim): Observable<Claim> {
    // verify required parameters are not null or undefined
    if (body === null || body === undefined) {
      return throwError('Required parameter body was null or undefined.');
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.post<Claim>(
      'http://127.0.0.1:8000/api/claims',
      body,
      { headers: headers }
    );
  }
  findAll(
    criteria?: string,
    order?: string,
    keys?: string
  ): Observable<Claim[]> {
    let params = new HttpParams();
    if (criteria !== undefined) {
      params = params.append('criteria', criteria.toString());
    }
    if (order !== undefined) {
      params = params.append('order', order.toString());
    }
    if (keys !== undefined) {
      params = params.append('keys', keys.toString());
    }

    return this.httpClient.get<Claim[]>('http://127.0.0.1:8000/api/claims', {
      params: params,
    });
  }
  getClaims(): Observable<Claim> {
    return this.httpClient.get<Claim>(`http://127.0.0.1:8000/api/claims`);
  }

  getClaimById(id): Observable<Claim> {
    return this.httpClient.get<Claim>(
      `http://127.0.0.1:8000/api/claims/` + id
    );
  }

  deleteClaim(id): Observable<any>{
 
    return this.httpClient.delete(`http://127.0.0.1:8000/api/claims/`+ id);
 
  }
  updateClaim(claimid,body) : Observable<any>{
    return this.httpClient.put(`http://127.0.0.1:8000/api/claims/`+ claimid, body);
 
  }
}
