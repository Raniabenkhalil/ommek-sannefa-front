import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClaimComponent } from './components/claim/claim.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu/menu.component';
import { FooterComponent } from './footer/footer/footer.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ArticleComponent } from './article/article/article.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { HttpClientModule } from '@angular/common/http';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { DetailsComponent } from './recipes/details/details.component';
import { NewArticleComponent } from './article/article/new-article/new-article.component';
import { DetailsArticleComponent } from './article/article/details-article/details-article.component';
import { UpdateArticleComponent } from './article/article/update-article/update-article.component';
import { ArticleListComponent } from './article/article/article-list/article-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClaimComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    RecipesComponent,
    ArticleComponent,
    CarouselComponent,
    HomeComponent,
    AddRecipeComponent,
    DetailsComponent,
    NewArticleComponent,
    DetailsArticleComponent,
    UpdateArticleComponent,
    ArticleListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RadioButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
