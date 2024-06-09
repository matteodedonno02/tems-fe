import {Article} from "./article";

export class Category {
  idCategory: number
  name: string
  image? : string
  disabled: boolean
  articles: Article[]
}
