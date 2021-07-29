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
import {RadioButtonModule} from 'primeng/radiobutton';


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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
