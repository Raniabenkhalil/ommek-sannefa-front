import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredients, Recipe } from '../models/recipe';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(protected httpClient: HttpClient) {}
  getRecipes(category: string): Observable<Recipe> {
    if (category === 'all') {
      return this.httpClient.get<Recipe>(
        `http://192.168.1.12:8000/api/recipes`
      );
    } else {
      return this.httpClient.get<Recipe>(
        `http://192.168.1.12:8000/api/recipes?category=` + category
      );
    }
  }
  getIngredients(): Observable<Ingredients> {
    return this.httpClient.get<Ingredients>(
      `http://192.168.1.12:8000/api/ingredients`
    );
  }
  addRecipe(recipe: Recipe) {
    return this.httpClient
      .post<Recipe>('http://192.168.1.12:8000/api/recipes', recipe)
      .subscribe((response) => console.log(response));
  }
  getRecipeById(id): Observable<Recipe> {
    return this.httpClient.get<Recipe>(
      `http://192.168.1.12:8000/api/recipes/` + id
    );
  }
  uploadFile(formData) {
    this.httpClient
      .post<any>('http://192.168.1.12:8000/api/media_objects', formData)
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
  }
}
