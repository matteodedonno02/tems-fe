import {Category} from './category';
export class Article {
  idArticle: number
  name: string
  description? : string
  price : number
  image? : string
  disabled: boolean
  categories: Category[]
}
