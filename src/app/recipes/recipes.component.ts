import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.filterByCategory('all');
  }
  details(recipeId) {
    this.router.navigate(['details/' + recipeId]);
  }
  filterByCategory(category) {
    this.recipeService.getRecipes(category).subscribe((next) => {
      this.recipes = next['hydra:member'];
    });
  }
}
