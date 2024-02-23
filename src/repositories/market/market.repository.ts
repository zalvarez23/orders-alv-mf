import { Product } from "../../models/product.model";
import {
  IFilterAccordion,
  IProductGroup,
  TypeGrouBy,
} from "../../types/market/user.interface";

export interface IMarketRepository {
  getProducts(
    groupBy: TypeGrouBy,
    inputFilter: string | null
  ): Promise<IProductGroup>;

  getProductsByGroups(
    filterAccordion: IFilterAccordion,
    inputFilter: string | null
  ): Promise<Product[]>;
}
