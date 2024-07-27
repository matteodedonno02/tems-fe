import {File} from "./file"
import {Article} from "./article";

export class Category {
  idCategory?: number
  name: string
  disabled: boolean
  image?: File
  articles: Article[]
}
