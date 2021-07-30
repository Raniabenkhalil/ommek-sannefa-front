import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddClaimComponent } from './components/claim/add-claim.component';
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

import { ListClaimsComponent } from './components/claim/list-claims/list-claims.component';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import { ClaimDetailsComponent } from './components/claim/claim-details/claim-details.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AddClaimComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    RecipesComponent,
    ArticleComponent,
    CarouselComponent,
    HomeComponent,
    AddRecipeComponent,
    DetailsComponent,
    ListClaimsComponent,
    ClaimDetailsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NgSelectModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RadioButtonModule,
    DataViewModule  ,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    RatingModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
