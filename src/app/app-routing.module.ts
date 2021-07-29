import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Carousel } from 'primeng';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'' , component:HomeComponent},

  {path:'carousel' , loadChildren: () => import('./modules/carousel/carousel.module')
.then(mod => mod.CarouselModule)},
{path:'footer' ,component:FooterComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
