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

export type CategoriesType = {
  categoryId?: Maybe<Scalars["ID"]>;
  categoryName: Scalars["String"];
  description: Scalars["String"];
  picture?: Maybe<Array<Maybe<Scalars["String"]>>>;
  products?: Maybe<Array<Maybe<ProductType>>>;
};

export type CustomerCustomerDemoType = {
  customerId?: Maybe<CustomersType>;
  customerTypeId?: Maybe<Scalars["ID"]>;
};

export type CustomerDemographicsType = {
  customerDesc: Scalars["String"];
  customerTypeId?: Maybe<CustomerCustomerDemoType>;
};

export type CustomersType = {
  address: Scalars["String"];
  city: Scalars["String"];
  companyName: Scalars["String"];
  contactName: Scalars["String"];
  contactTitle: Scalars["String"];
  country: Scalars["String"];
  customerId?: Maybe<Scalars["ID"]>;
  fax: Scalars["String"];
  phone: Scalars["String"];
  postalCode: Scalars["String"];
  region: Scalars["String"];
};

export type EmployeesType = {
  address: Scalars["String"];
  birthDate?: Maybe<Scalars["Date"]>;
  city: Scalars["String"];
  country: Scalars["String"];
  employeeId?: Maybe<Scalars["ID"]>;
  extension: Scalars["String"];
  firstName: Scalars["String"];
  hireDate?: Maybe<Scalars["Date"]>;
  homePhone: Scalars["String"];
  lastName: Scalars["String"];
  notes: Scalars["String"];
  photo?: Maybe<Scalars["String"]>;
  photoPath: Scalars["String"];
  postalCode: Scalars["String"];
  region: Scalars["String"];
  reportsTo?: Maybe<Scalars["Int"]>;
  title: Scalars["String"];
  titleOfCourtesy: Scalars["String"];
};

export type EmployeeTerritoriesType = {
  employeeId?: Maybe<EmployeesType>;
  territoryId: Scalars["String"];
};

export type NorthWindMutation = {
  productInput?: Maybe<ProductType>;
};

export type NorthWindMutationProductInputArgs = {
  product: ProductInput;
};

export type NorthWindQuery = {
  categories?: Maybe<Array<Maybe<CategoriesType>>>;
  category?: Maybe<CategoriesType>;
  customerDemographics?: Maybe<Array<Maybe<CustomerDemographicsType>>>;
  customers?: Maybe<Array<Maybe<CustomersType>>>;
  customersDemo?: Maybe<Array<Maybe<CustomerCustomerDemoType>>>;
  employees?: Maybe<Array<Maybe<EmployeesType>>>;
  employeesTerritories?: Maybe<Array<Maybe<EmployeeTerritoriesType>>>;
  orderDetails?: Maybe<Array<Maybe<OrderDetailsType>>>;
  orders?: Maybe<Array<Maybe<OrdersType>>>;
  product?: Maybe<ProductType>;
  products?: Maybe<Array<Maybe<ProductType>>>;
  regions?: Maybe<Array<Maybe<RegionType>>>;
  shippers?: Maybe<Array<Maybe<ShippersType>>>;
  supplier?: Maybe<SupplierType>;
  suppliers?: Maybe<Array<Maybe<SupplierType>>>;
  territories?: Maybe<Array<Maybe<TerritoriesType>>>;
};

export type NorthWindQueryCategoryArgs = {
  id: Scalars["ID"];
};

export type NorthWindQueryProductArgs = {
  id: Scalars["ID"];
};

export type NorthWindQuerySupplierArgs = {
  id: Scalars["ID"];
};

export type OrderDetailsType = {
  discount: Scalars["Float"];
  orderId: Scalars["Int"];
  productId?: Maybe<ProductType>;
  quantity?: Maybe<Scalars["Int"]>;
  unitPrice: Scalars["Decimal"];
};

export type OrdersType = {
  customerId?: Maybe<CustomersType>;
  employeeId?: Maybe<Scalars["ID"]>;
  freight?: Maybe<Scalars["Decimal"]>;
  orderDate?: Maybe<Scalars["Date"]>;
  orderDetails?: Maybe<Array<Maybe<OrderDetailsType>>>;
  orderId: Scalars["Int"];
  requiredDate?: Maybe<Scalars["Date"]>;
  shipAddress: Scalars["String"];
  shipCity: Scalars["String"];
  shipCountry: Scalars["String"];
  shipName: Scalars["String"];
  shippedDate?: Maybe<Scalars["Date"]>;
  shipPostalCode: Scalars["String"];
  shipRegion: Scalars["String"];
  shipVia?: Maybe<Scalars["Int"]>;
};

export type ProductInput = {
  productName: Scalars["String"];
  unitPrice?: Maybe<Scalars["Decimal"]>;
};

export type ProductType = {
  categoryId?: Maybe<Scalars["Int"]>;
  discontinued: Scalars["Boolean"];
  orderDetails?: Maybe<Array<Maybe<OrderDetailsType>>>;
  productId?: Maybe<Scalars["ID"]>;
  /** Product name */
  productName: Scalars["String"];
  quantityPerUnit: Scalars["String"];
  reorderLevel?: Maybe<Scalars["Int"]>;
  supplierId?: Maybe<Scalars["ID"]>;
  suppliers?: Maybe<Array<Maybe<SupplierType>>>;
  unitPrice?: Maybe<Scalars["Decimal"]>;
  unitsInStock?: Maybe<Scalars["Int"]>;
  unitsOnOrder?: Maybe<Scalars["Int"]>;
};

export type RegionType = {
  regionDescription: Scalars["String"];
  regionId: Scalars["Int"];
};

export type ShippersType = {
  companyName: Scalars["String"];
  phone: Scalars["String"];
  shipperId: Scalars["Int"];
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
  products?: Maybe<Array<Maybe<ProductType>>>;
  region: Scalars["String"];
  supplierId?: Maybe<Scalars["ID"]>;
};

export type TerritoriesType = {
  regionId?: Maybe<RegionType>;
  territoryDescription: Scalars["String"];
  territoryId: Scalars["String"];
};
export type FindProductByIdQueryVariables = {
  id: Scalars["ID"];
};

export type FindProductByIdQuery = { __typename?: "NorthWindQuery" } & {
  product: Maybe<
    { __typename?: "ProductType" } & Pick<
      ProductType,
      | "productId"
      | "productName"
      | "unitPrice"
      | "unitsInStock"
      | "unitsOnOrder"
      | "quantityPerUnit"
      | "discontinued"
    >
  >;
};

export type GetProductsTableQueryVariables = {};

export type GetProductsTableQuery = { __typename?: "NorthWindQuery" } & {
  products: Maybe<
    Array<
      Maybe<
        { __typename?: "ProductType" } & Pick<
          ProductType,
          | "productId"
          | "productName"
          | "unitPrice"
          | "discontinued"
          | "unitsInStock"
          | "unitsOnOrder"
        >
      >
    >
  >;
};

export type GetProductsQueryVariables = {};

export type GetProductsQuery = { __typename?: "NorthWindQuery" } & {
  products: Maybe<
    Array<
      Maybe<
        { __typename?: "ProductType" } & Pick<
          ProductType,
          | "productName"
          | "unitPrice"
          | "discontinued"
          | "unitPrice"
          | "unitsInStock"
          | "unitsOnOrder"
          | "discontinued"
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
          "companyName" | "address" | "country" | "city" | "companyName"
        >
      >
    >
  >;
};

import gql from "graphql-tag";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";

export const FindProductByIdDocument = gql`
  query FindProductById($id: ID!) {
    product(id: $id) {
      productId
      productName
      unitPrice
      unitsInStock
      unitsOnOrder
      quantityPerUnit
      discontinued
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class FindProductByIdGQL extends Apollo.Query<
  FindProductByIdQuery,
  FindProductByIdQueryVariables
> {
  document = FindProductByIdDocument;
}
export const GetProductsTableDocument = gql`
  query GetProductsTable {
    products {
      productId
      productName
      unitPrice
      discontinued
      unitsInStock
      unitsOnOrder
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetProductsTableGQL extends Apollo.Query<
  GetProductsTableQuery,
  GetProductsTableQueryVariables
> {
  document = GetProductsTableDocument;
}
export const GetProductsDocument = gql`
  query GetProducts {
    products {
      productName
      unitPrice
      discontinued
      unitPrice
      unitsInStock
      unitsOnOrder
      discontinued
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
      companyName
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
