import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { NotAuthGuard } from './services/not-auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { RecipeComponent } from './recipe/recipe.component';
import { DetailsComponent } from './recipe/details/details.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: RecipeComponent,
    /*children: [
      {
        path: 'details',
        component: DetailsComponent,
      },
    ],*/
  },
  {
    path: 'register',
    canActivate: [NotAuthGuard],
    component: RegisterComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  { path: 'user', canActivate: [AuthGuard], component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
