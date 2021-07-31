import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Carousel } from 'primeng';
import { DetailsArticleComponent } from './article/article/details-article/details-article.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { DetailsComponent } from './recipes/details/details.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  { path: '', component: RecipesComponent },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  { path: 'addRecipe', component: AddRecipeComponent },
  {
    path: 'carousel',
    loadChildren: () =>
      import('./modules/carousel/carousel.module').then(
        (mod) => mod.CarouselModule
      ),
  },
  { path: 'footer', component: FooterComponent },
  { path: 'detailsArticle/:id', component: DetailsArticleComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
