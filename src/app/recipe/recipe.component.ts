import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(
      (next) => {
        this.recipes = next['hydra:member'];
      },
      (error) => console.log(console.error())
    );
  }
  goToDetails(recipeId) {
    this.router.navigate(['details/' + recipeId]);
  }
}
