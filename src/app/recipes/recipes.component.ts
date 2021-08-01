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
  deleteId;
  currentUser;
  admin;
  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.filterByCategory('all');
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.admin = this.currentUser.roles.includes('ROLE_ADMIN');
  }
  details(recipeId) {
    this.router.navigate(['details/' + recipeId]);
  }
  filterByCategory(category) {
    this.recipeService.getRecipes(category).subscribe((next) => {
      this.recipes = next['hydra:member'];
      if (this.currentUser.roles.includes('ROLE_ADMIN')) {
        this.recipes = next['hydra:member'];
      } else {
        this.recipes = this.recipes.filter((recipe) => recipe.isActive);
      }
    });
  }
  approuve(id) {
    var toto = { isActive: true };
    this.recipeService
      .approuve(id, toto)
      .subscribe((res) => window.location.reload());
  }
  filterByUser() {
    this.recipeService.myRecipes(this.currentUser.id).subscribe((next) => {
      this.recipes = next['hydra:member'];
    });
  }
  modalOn(id) {
    this.deleteId = id;
  }
  tobeaproved() {
    this.recipeService.tobeaproved().subscribe((next) => {
      this.recipes = next['hydra:member'];
    });
  }
}
