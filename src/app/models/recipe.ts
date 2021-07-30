import { User } from './user';

export class Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  user: User;
  preparationTime: number;
  servesNumPersons: number;
  recipeIngredients: any;
  steps: string;
}
export class Ingredients {
  id: string;
  name: string;
}
