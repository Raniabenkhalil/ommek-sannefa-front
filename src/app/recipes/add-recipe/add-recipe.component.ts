import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ingredients } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
  selectedCar: number;
  recipeForm: FormGroup = new FormGroup({
    user: new FormControl(),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    difficulty: new FormControl(),
    category: new FormControl('', Validators.required),
    preparationTime: new FormControl(),
  });
  ingredientForm: FormGroup = new FormGroup({
    unit: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    ingredient: new FormControl('', Validators.required),
  });
  _ingredients = [];
  ingredients: Ingredients;

  get user() {
    return this.recipeForm.get('user');
  }
  get quantity() {
    return this.ingredientForm.get('quantity');
  }
  get title() {
    return this.recipeForm.get('title');
  }

  get category() {
    return this.recipeForm.get('category');
  }
  get description() {
    return this.recipeForm.get('description');
  }
  constructor(private recipeService: RecipeService) {
    this.recipeService.getIngredients().subscribe((next) => {
      this.ingredients = next['hydra:member'];
    });
  }

  ngOnInit(): void {}

  addIngredient() {
    const ingredientFormValue = { ...this.ingredientForm.getRawValue() };
    this._ingredients.push(ingredientFormValue);
  }
  save() {
    this.recipeForm.get('user').setValue('/api/users/1');
    const recipeFormValue = { ...this.recipeForm.getRawValue() };
    this.recipeService.addRecipe(recipeFormValue);
  }
  onFileSelect(event) {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    this.recipeService.uploadFile(formData);
  }
}
