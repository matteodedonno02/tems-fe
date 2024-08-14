import { CustomFile } from "./file"
import { Article } from "./article";

export class Category {
  idCategory?: number
  name: string
  disabled: boolean
  image?: CustomFile
  articles: Article[]
}
