import { AxiosResponse } from "axios";
import { ApiClient } from "../../utils/api-client";
import useCookie from "../../hooks/useCookie";
import { COOKIE_BUSINESS_LOGIN_TOKEN } from "../../constants/cookies-constans";
import { IMarketRepository } from "./market.repository";
import { GroupProduct, Product } from "../../models/product.model";
import {
  IFilterAccordion,
  IProductGroup,
  TypeGrouBy,
} from "../../types/market/user.interface";
import { validateIfIsGroup } from "../../utils/market/market-validate-response.utils";

export class ApiMarketImpl implements IMarketRepository {
  private apiClient: ApiClient;
  constructor() {
    this.apiClient = ApiClient.getInstance();
  }

  async getProducts(
    groupBy: TypeGrouBy,
    inputFilter: string | null
  ): Promise<IProductGroup> {
    const { getCookieValue } = useCookie(COOKIE_BUSINESS_LOGIN_TOKEN);
    const token = getCookieValue();

    const urlParams = `${groupBy && `?group_by=${groupBy}`}${
      inputFilter ? `&product_name=${inputFilter}` : ""
    }`;

    const response: AxiosResponse<Product[] | GroupProduct[]> =
      await this.apiClient
        .getHttpClient()
        .get(`${import.meta.env.VITE_API_URL as string}/market${urlParams}`, {
          headers: {
            platform: "pwa",
            Authorization: `Bearer ${token}`,
          },
        });
    const isGroup = validateIfIsGroup(response.data);
    const responseDto: IProductGroup = {
      isGroup,
      product: isGroup ? [] : (response.data as Product[]),
      productGroup: isGroup ? (response.data as GroupProduct[]) : [],
    };
    return responseDto;
  }

  async getProductsByGroups(
    filterAccordion: IFilterAccordion,
    inputFilter: string | null
  ): Promise<Product[]> {
    const { getCookieValue } = useCookie(COOKIE_BUSINESS_LOGIN_TOKEN);
    const token = getCookieValue();

    const urlParams = `${
      filterAccordion &&
      `?group_by=${filterAccordion.pathGroupBy}&${filterAccordion.pathId}=${
        filterAccordion.id
      }${inputFilter ? `&product_name=${inputFilter}` : ""}`
    }`;

    const response: AxiosResponse<Product[]> = await this.apiClient
      .getHttpClient()
      .get(`${import.meta.env.VITE_API_URL as string}/market${urlParams}`, {
        headers: {
          platform: "pwa",
          Authorization: `Bearer ${token}`,
        },
      });
    return response.data;
  }
}
