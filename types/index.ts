export interface IRecipe {
  _id: string;
  title: string;
  slug: string;
  info: [{
    header: string;
    body: string;
  }];
  ingredients: string[];
  directions: string[];
}