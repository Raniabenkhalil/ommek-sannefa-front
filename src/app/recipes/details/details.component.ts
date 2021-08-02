import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';
import { Review } from 'src/app/models/review.model';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  recipe: Recipe;
  recipeId;
  direction;
  r: Review = new Review();
  recipeReview = [];
  id;
  review: Review;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.params['id'];
    this.recipeService.getRecipeById(this.recipeId).subscribe((next) => {
      this.recipe = next;
      this.direction = this.recipe?.steps.split('.');
    });
    console.log('tt', this.getRecipeReview(this.recipeId));
    console.log(this.recipeReview);
  }

  addReviews() {
    this.id = this.route.snapshot.params['id'];
    this.reviewService
      .addReview(this.r, this.id)
      .subscribe((res) => window.location.reload());
    this.r = new Review();
    console.log(this.r);
  }

  getRecipeReview(recipeId) {
    this.recipeService.getRecipeById(recipeId).subscribe((data) => {
      data['reviews'].map((element, index) => {
        let review = element.substring(element.length - 1);
        console.log(review);
        this.reviewService.getReviewById(review).subscribe((rev) => {
          this.recipeReview.push(rev);
        });
      });
      console.log('rrr', this.recipeReview);
    });
  }

  deleteReview(reviewid) {
    this.reviewService
      .deleteReview(reviewid)
      .subscribe((res) => window.location.reload());
  }
}
