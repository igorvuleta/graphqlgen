type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Decimal: any;
  /** The `Date` scalar type represents a year, month and day in accordance with the
   * [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard.
   */
  Date: any;
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects
   * timestamps to be formatted in accordance with the
   * [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard.
   */
  DateTime: any;
  /** The `DateTimeOffset` scalar type represents a date, time and offset from UTC.
   * `DateTimeOffset` expects timestamps to be formatted in accordance with the
   * [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard.
   */
  DateTimeOffset: any;
  /** The `Milliseconds` scalar type represents a period of time represented as the total number of milliseconds. */
  Milliseconds: any;
  /** The `Seconds` scalar type represents a period of time represented as the total number of seconds. */
  Seconds: any;
};

export type NorthWindQuery = {
  products?: Maybe<Array<Maybe<ProductType>>>;
  suppliers?: Maybe<Array<Maybe<SupplierType>>>;
};

export type ProductType = {
  discontinued: Scalars["Boolean"];
  productId: Scalars["Int"];
  /** Product Name */
  productName: Scalars["String"];
  quantityPerUnit: Scalars["String"];
  unitPrice?: Maybe<Scalars["Decimal"]>;
};

export type SupplierType = {
  address: Scalars["String"];
  city: Scalars["String"];
  companyName: Scalars["String"];
  contactName: Scalars["String"];
  contactTitle: Scalars["String"];
  country: Scalars["String"];
  fax: Scalars["String"];
  homePage: Scalars["String"];
  phone: Scalars["String"];
  postalCode: Scalars["String"];
  region: Scalars["String"];
  supplierId: Scalars["Int"];
};
export type GetProductsQueryVariables = {};

export type GetProductsQuery = { __typename?: "NorthWindQuery" } & {
  products: Maybe<
    Array<
      Maybe<
        { __typename?: "ProductType" } & Pick<
          ProductType,
          "productName" | "unitPrice" | "discontinued" | "quantityPerUnit"
        >
      >
    >
  >;
};

export type GetSupplierCityQueryVariables = {};

export type GetSupplierCityQuery = { __typename?: "NorthWindQuery" } & {
  suppliers: Maybe<
    Array<Maybe<{ __typename?: "SupplierType" } & Pick<SupplierType, "city">>>
  >;
};

export type GetSuppliersQueryVariables = {};

export type GetSuppliersQuery = { __typename?: "NorthWindQuery" } & {
  suppliers: Maybe<
    Array<
      Maybe<
        { __typename?: "SupplierType" } & Pick<
          SupplierType,
          "companyName" | "address" | "country" | "city"
        >
      >
    >
  >;
};

import gql from "graphql-tag";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";

export const GetProductsDocument = gql`
  query GetProducts {
    products {
      productName
      unitPrice
      discontinued
      quantityPerUnit
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetProductsGQL extends Apollo.Query<
  GetProductsQuery,
  GetProductsQueryVariables
> {
  document = GetProductsDocument;
}
export const GetSupplierCityDocument = gql`
  query GetSupplierCity {
    suppliers {
      city
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetSupplierCityGQL extends Apollo.Query<
  GetSupplierCityQuery,
  GetSupplierCityQueryVariables
> {
  document = GetSupplierCityDocument;
}
export const GetSuppliersDocument = gql`
  query GetSuppliers {
    suppliers {
      companyName
      address
      country
      city
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetSuppliersGQL extends Apollo.Query<
  GetSuppliersQuery,
  GetSuppliersQueryVariables
> {
  document = GetSuppliersDocument;
}
