import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Carousel } from 'primeng';
import { CarouselComponent } from './carousel/carousel.component';
import { AddClaimComponent } from './components/claim/add-claim.component';
import { ClaimDetailsComponent } from './components/claim/claim-details/claim-details.component';
import { ListClaimsComponent } from './components/claim/list-claims/list-claims.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { DetailsComponent } from './recipes/details/details.component';
import { UpdateReviewComponent } from './update-review/update-review.component';
import { SigninComponent } from './user/signin/signin.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'claimDetails/:id',
    component: ClaimDetailsComponent,
  },
  { path: 'users', component: UserComponent },
  {
    path: 'addClaim',
    component: AddClaimComponent,
  },
  {
    path: 'update/:id',
    component: UpdateReviewComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'listClaims',
    component: ListClaimsComponent,
  },
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
    component: CarouselComponent,
  },
  { path: 'footer', component: FooterComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
