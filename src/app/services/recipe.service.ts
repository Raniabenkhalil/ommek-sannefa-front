import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(protected httpClient: HttpClient) {}
  getRecipes(): Observable<Recipe> {
    return this.httpClient.get<Recipe>(`http://192.168.1.12:8000/api/recipes`);
  }
}
