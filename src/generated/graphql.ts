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
  fax?: Maybe<Scalars["String"]>;
  phone: Scalars["String"];
  postalCode: Scalars["String"];
  region?: Maybe<Scalars["String"]>;
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
  /** This table holds all Categories and is in a relationship with products! */
  categories?: Maybe<Array<Maybe<CategoriesType>>>;
  category?: Maybe<CategoriesType>;
  customer?: Maybe<CustomersType>;
  /** This table holds customer description and customer type id itßs related to the cutomer demo type! */
  customerDemographics?: Maybe<Array<Maybe<CustomerDemographicsType>>>;
  /** This table holds all Customers records and its not related to any other tables! */
  customers?: Maybe<Array<Maybe<CustomersType>>>;
  /** This table holds customer Id and customer type Id its related to the customers! */
  customersDemo?: Maybe<Array<Maybe<CustomerCustomerDemoType>>>;
  employee?: Maybe<EmployeesType>;
  /** This table holds all records about employees and its not related to any other table! */
  employees?: Maybe<Array<Maybe<EmployeesType>>>;
  /** This table holds employee territories and it is related to the employee table! */
  employeesTerritories?: Maybe<Array<Maybe<EmployeeTerritoriesType>>>;
  /** This table holds all order details, and is in a relationship with the products! */
  orderDetails?: Maybe<Array<Maybe<OrderDetailsType>>>;
  /** This table holds all orders and is in relationship with order details and customers tables! */
  orders?: Maybe<Array<Maybe<OrdersType>>>;
  product?: Maybe<ProductType>;
  /** This table holds all products and product properties in relatioship with order details and suppliers! */
  products?: Maybe<Array<Maybe<ProductType>>>;
  /** this table is holds region descriptions and it is not related to any other table in the database! */
  regions?: Maybe<Array<Maybe<RegionType>>>;
  /** This table holds all shippers and is in none relationship to other tables! */
  shippers?: Maybe<Array<Maybe<ShippersType>>>;
  supplier?: Maybe<SupplierType>;
  /** This table holds all suppliers in a relationship with products! */
  suppliers?: Maybe<Array<Maybe<SupplierType>>>;
  /** Territories table holds the region and territories descriptions and it is realted to the region table! */
  territories?: Maybe<Array<Maybe<TerritoriesType>>>;
};

export type NorthWindQueryCategoryArgs = {
  id: Scalars["ID"];
};

export type NorthWindQueryCustomerArgs = {
  id: Scalars["ID"];
};

export type NorthWindQueryEmployeeArgs = {
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
  fax?: Maybe<Scalars["String"]>;
  homePage?: Maybe<Scalars["String"]>;
  phone: Scalars["String"];
  postalCode: Scalars["String"];
  products?: Maybe<Array<Maybe<ProductType>>>;
  region?: Maybe<Scalars["String"]>;
  supplierId?: Maybe<Scalars["ID"]>;
};

export type TerritoriesType = {
  regionId?: Maybe<RegionType>;
  territoryDescription: Scalars["String"];
  territoryId: Scalars["String"];
};

/** A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior
 * in ways field arguments will not suffice, such as conditionally including or
 * skipping a field. Directives provide this by describing additional information
 * to the executor.
 */
export type __Directive = {
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  locations: Array<__DirectiveLocation>;
  args: Array<__InputValue>;
};

/** A Directive can be adjacent to many parts of the GraphQL language, a
 * __DirectiveLocation describes one such possible adjacencies.
 */
export enum __DirectiveLocation {
  /** Location adjacent to a query operation. */
  Query = "QUERY",
  /** Location adjacent to a mutation operation. */
  Mutation = "MUTATION",
  /** Location adjacent to a subscription operation. */
  Subscription = "SUBSCRIPTION",
  /** Location adjacent to a field. */
  Field = "FIELD",
  /** Location adjacent to a fragment definition. */
  FragmentDefinition = "FRAGMENT_DEFINITION",
  /** Location adjacent to a fragment spread. */
  FragmentSpread = "FRAGMENT_SPREAD",
  /** Location adjacent to an inline fragment. */
  InlineFragment = "INLINE_FRAGMENT",
  /** Location adjacent to a variable definition. */
  VariableDefinition = "VARIABLE_DEFINITION",
  /** Location adjacent to a schema definition. */
  Schema = "SCHEMA",
  /** Location adjacent to a scalar definition. */
  Scalar = "SCALAR",
  /** Location adjacent to an object type definition. */
  Object = "OBJECT",
  /** Location adjacent to a field definition. */
  FieldDefinition = "FIELD_DEFINITION",
  /** Location adjacent to an argument definition. */
  ArgumentDefinition = "ARGUMENT_DEFINITION",
  /** Location adjacent to an interface definition. */
  Interface = "INTERFACE",
  /** Location adjacent to a union definition. */
  Union = "UNION",
  /** Location adjacent to an enum definition. */
  Enum = "ENUM",
  /** Location adjacent to an enum value definition. */
  EnumValue = "ENUM_VALUE",
  /** Location adjacent to an input object type definition. */
  InputObject = "INPUT_OBJECT",
  /** Location adjacent to an input object field definition. */
  InputFieldDefinition = "INPUT_FIELD_DEFINITION"
}

/** One possible value for a given Enum. Enum values are unique values, not a
 * placeholder for a string or numeric value. However an Enum value is returned in
 * a JSON response as a string.
 */
export type __EnumValue = {
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  isDeprecated: Scalars["Boolean"];
  deprecationReason?: Maybe<Scalars["String"]>;
};

/** Object and Interface types are described by a list of Fields, each of which has
 * a name, potentially a list of arguments, and a return type.
 */
export type __Field = {
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  args: Array<__InputValue>;
  type: __Type;
  isDeprecated: Scalars["Boolean"];
  deprecationReason?: Maybe<Scalars["String"]>;
};

/** Arguments provided to Fields or Directives and the input fields of an
 * InputObject are represented as Input Values which describe their type and
 * optionally a default value.
 */
export type __InputValue = {
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type: __Type;
  /** A GraphQL-formatted string representing the default value for this input value. */
  defaultValue?: Maybe<Scalars["String"]>;
};

/** A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all
 * available types and directives on the server, as well as the entry points for
 * query, mutation, and subscription operations.
 */
export type __Schema = {
  /** A list of all types supported by this server. */
  types: Array<__Type>;
  /** The type that query operations will be rooted at. */
  queryType: __Type;
  /** If this server supports mutation, the type that mutation operations will be rooted at. */
  mutationType?: Maybe<__Type>;
  /** If this server support subscription, the type that subscription operations will be rooted at. */
  subscriptionType?: Maybe<__Type>;
  /** A list of all directives supported by this server. */
  directives: Array<__Directive>;
};

/** The fundamental unit of any GraphQL Schema is the type. There are many kinds of
 * types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that
 * type. Scalar types provide no information beyond a name and description, while
 * Enum types provide their values. Object and Interface types provide the fields
 * they describe. Abstract types, Union and Interface, provide the Object types
 * possible at runtime. List and NonNull types compose other types.
 */
export type __Type = {
  kind: __TypeKind;
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  fields?: Maybe<Array<__Field>>;
  interfaces?: Maybe<Array<__Type>>;
  possibleTypes?: Maybe<Array<__Type>>;
  enumValues?: Maybe<Array<__EnumValue>>;
  inputFields?: Maybe<Array<__InputValue>>;
  ofType?: Maybe<__Type>;
};

/** The fundamental unit of any GraphQL Schema is the type. There are many kinds of
 * types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that
 * type. Scalar types provide no information beyond a name and description, while
 * Enum types provide their values. Object and Interface types provide the fields
 * they describe. Abstract types, Union and Interface, provide the Object types
 * possible at runtime. List and NonNull types compose other types.
 */
export type __TypeFieldsArgs = {
  includeDeprecated: Scalars["Boolean"];
};

/** The fundamental unit of any GraphQL Schema is the type. There are many kinds of
 * types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that
 * type. Scalar types provide no information beyond a name and description, while
 * Enum types provide their values. Object and Interface types provide the fields
 * they describe. Abstract types, Union and Interface, provide the Object types
 * possible at runtime. List and NonNull types compose other types.
 */
export type __TypeEnumValuesArgs = {
  includeDeprecated: Scalars["Boolean"];
};

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
  /** Indicates this type is a scalar. */
  Scalar = "SCALAR",
  /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
  Object = "OBJECT",
  /** Indicates this type is an interface. `fields` and `possibleTypes` are valid fields. */
  Interface = "INTERFACE",
  /** Indicates this type is a union. `possibleTypes` is a valid field. */
  Union = "UNION",
  /** Indicates this type is an enum. `enumValues` is a valid field. */
  Enum = "ENUM",
  /** Indicates this type is an input object. `inputFields` is a valid field. */
  InputObject = "INPUT_OBJECT",
  /** Indicates this type is a list. `ofType` is a valid field. */
  List = "LIST",
  /** Indicates this type is a non-null. `ofType` is a valid field. */
  NonNull = "NON_NULL"
}
export type FindCategoryByIdQueryVariables = {
  id: Scalars["ID"];
};

export type FindCategoryByIdQuery = { __typename?: "NorthWindQuery" } & {
  category: Maybe<
    { __typename?: "CategoriesType" } & Pick<
      CategoriesType,
      "categoryId" | "categoryName" | "description"
    >
  >;
};

export type GetCategoriesQueryVariables = {};

export type GetCategoriesQuery = { __typename?: "NorthWindQuery" } & {
  categories: Maybe<
    Array<
      Maybe<
        { __typename?: "CategoriesType" } & Pick<
          CategoriesType,
          "categoryId" | "categoryName" | "description"
        >
      >
    >
  >;
};

export type FindCustomerPerIdQueryVariables = {
  id: Scalars["ID"];
};

export type FindCustomerPerIdQuery = { __typename?: "NorthWindQuery" } & {
  customer: Maybe<
    { __typename?: "CustomersType" } & Pick<
      CustomersType,
      | "address"
      | "city"
      | "companyName"
      | "contactTitle"
      | "country"
      | "customerId"
      | "fax"
      | "phone"
      | "postalCode"
      | "customerId"
      | "region"
    >
  >;
};

export type GetCustomersQueryVariables = {};

export type GetCustomersQuery = { __typename?: "NorthWindQuery" } & {
  customers: Maybe<
    Array<
      Maybe<
        { __typename?: "CustomersType" } & Pick<
          CustomersType,
          "customerId" | "companyName" | "contactName" | "country" | "region"
        >
      >
    >
  >;
};

export type GetSchemaQueryVariables = {};

export type GetSchemaQuery = { __typename?: "NorthWindQuery" } & {
  __schema: { __typename?: "__Schema" } & {
    queryType: { __typename?: "__Type" } & {
      fields: Maybe<
        Array<
          { __typename?: "__Field" } & Pick<__Field, "name" | "description">
        >
      >;
    };
  };
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

export type FindEmployeePerIdQueryVariables = {
  id: Scalars["ID"];
};

export type FindEmployeePerIdQuery = { __typename?: "NorthWindQuery" } & {
  employee: Maybe<
    { __typename?: "EmployeesType" } & Pick<
      EmployeesType,
      | "employeeId"
      | "title"
      | "titleOfCourtesy"
      | "firstName"
      | "lastName"
      | "birthDate"
      | "address"
      | "hireDate"
      | "reportsTo"
      | "homePhone"
      | "notes"
      | "city"
      | "postalCode"
      | "country"
    >
  >;
};

export type GetEmployeesQueryVariables = {};

export type GetEmployeesQuery = { __typename?: "NorthWindQuery" } & {
  employees: Maybe<
    Array<
      Maybe<
        { __typename?: "EmployeesType" } & Pick<
          EmployeesType,
          "employeeId" | "firstName" | "lastName" | "birthDate" | "notes"
        >
      >
    >
  >;
};

export type GetOrderDetailsQueryVariables = {};

export type GetOrderDetailsQuery = { __typename?: "NorthWindQuery" } & {
  orderDetails: Maybe<
    Array<
      Maybe<
        { __typename?: "OrderDetailsType" } & Pick<
          OrderDetailsType,
          "orderId" | "discount" | "quantity" | "unitPrice"
        >
      >
    >
  >;
};

export type GetOrdersQueryVariables = {};

export type GetOrdersQuery = { __typename?: "NorthWindQuery" } & {
  orders: Maybe<
    Array<
      Maybe<
        { __typename?: "OrdersType" } & Pick<
          OrdersType,
          "orderId" | "shipName" | "orderDate" | "requiredDate"
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

export type GetRegionsQueryVariables = {};

export type GetRegionsQuery = { __typename?: "NorthWindQuery" } & {
  regions: Maybe<
    Array<
      Maybe<
        { __typename?: "RegionType" } & Pick<
          RegionType,
          "regionId" | "regionDescription"
        >
      >
    >
  >;
};

export type GetShippersQueryVariables = {};

export type GetShippersQuery = { __typename?: "NorthWindQuery" } & {
  shippers: Maybe<
    Array<
      Maybe<
        { __typename?: "ShippersType" } & Pick<
          ShippersType,
          "shipperId" | "companyName" | "phone"
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
          | "supplierId"
          | "companyName"
          | "address"
          | "country"
          | "city"
          | "contactTitle"
          | "fax"
          | "homePage"
          | "postalCode"
          | "region"
        >
      >
    >
  >;
};

export type GetTerritoriesQueryVariables = {};

export type GetTerritoriesQuery = { __typename?: "NorthWindQuery" } & {
  territories: Maybe<
    Array<
      Maybe<
        { __typename?: "TerritoriesType" } & Pick<
          TerritoriesType,
          "territoryId" | "territoryDescription"
        >
      >
    >
  >;
};

import gql from "graphql-tag";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";

export const FindCategoryByIdDocument = gql`
  query FindCategoryById($id: ID!) {
    category(id: $id) {
      categoryId
      categoryName
      description
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class FindCategoryByIdGQL extends Apollo.Query<
  FindCategoryByIdQuery,
  FindCategoryByIdQueryVariables
> {
  document = FindCategoryByIdDocument;
}
export const GetCategoriesDocument = gql`
  query getCategories {
    categories {
      categoryId
      categoryName
      description
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetCategoriesGQL extends Apollo.Query<
  GetCategoriesQuery,
  GetCategoriesQueryVariables
> {
  document = GetCategoriesDocument;
}
export const FindCustomerPerIdDocument = gql`
  query FindCustomerPerId($id: ID!) {
    customer(id: $id) {
      address
      city
      companyName
      contactTitle
      country
      customerId
      fax
      phone
      postalCode
      customerId
      region
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class FindCustomerPerIdGQL extends Apollo.Query<
  FindCustomerPerIdQuery,
  FindCustomerPerIdQueryVariables
> {
  document = FindCustomerPerIdDocument;
}
export const GetCustomersDocument = gql`
  query getCustomers {
    customers {
      customerId
      companyName
      contactName
      country
      region
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetCustomersGQL extends Apollo.Query<
  GetCustomersQuery,
  GetCustomersQueryVariables
> {
  document = GetCustomersDocument;
}
export const GetSchemaDocument = gql`
  query GetSchema {
    __schema {
      queryType {
        fields {
          name
          description
        }
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetSchemaGQL extends Apollo.Query<
  GetSchemaQuery,
  GetSchemaQueryVariables
> {
  document = GetSchemaDocument;
}
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
export const FindEmployeePerIdDocument = gql`
  query FindEmployeePerId($id: ID!) {
    employee(id: $id) {
      employeeId
      title
      titleOfCourtesy
      firstName
      lastName
      birthDate
      address
      hireDate
      reportsTo
      homePhone
      notes
      city
      postalCode
      country
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class FindEmployeePerIdGQL extends Apollo.Query<
  FindEmployeePerIdQuery,
  FindEmployeePerIdQueryVariables
> {
  document = FindEmployeePerIdDocument;
}
export const GetEmployeesDocument = gql`
  query GetEmployees {
    employees {
      employeeId
      firstName
      lastName
      birthDate
      notes
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetEmployeesGQL extends Apollo.Query<
  GetEmployeesQuery,
  GetEmployeesQueryVariables
> {
  document = GetEmployeesDocument;
}
export const GetOrderDetailsDocument = gql`
  query GetOrderDetails {
    orderDetails {
      orderId
      discount
      quantity
      unitPrice
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetOrderDetailsGQL extends Apollo.Query<
  GetOrderDetailsQuery,
  GetOrderDetailsQueryVariables
> {
  document = GetOrderDetailsDocument;
}
export const GetOrdersDocument = gql`
  query getOrders {
    orders {
      orderId
      shipName
      orderDate
      requiredDate
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetOrdersGQL extends Apollo.Query<
  GetOrdersQuery,
  GetOrdersQueryVariables
> {
  document = GetOrdersDocument;
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
export const GetRegionsDocument = gql`
  query GetRegions {
    regions {
      regionId
      regionDescription
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetRegionsGQL extends Apollo.Query<
  GetRegionsQuery,
  GetRegionsQueryVariables
> {
  document = GetRegionsDocument;
}
export const GetShippersDocument = gql`
  query GetShippers {
    shippers {
      shipperId
      companyName
      phone
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetShippersGQL extends Apollo.Query<
  GetShippersQuery,
  GetShippersQueryVariables
> {
  document = GetShippersDocument;
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
      supplierId
      companyName
      address
      country
      city
      contactTitle
      fax
      homePage
      postalCode
      region
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
export const GetTerritoriesDocument = gql`
  query GetTerritories {
    territories {
      territoryId
      territoryDescription
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetTerritoriesGQL extends Apollo.Query<
  GetTerritoriesQuery,
  GetTerritoriesQueryVariables
> {
  document = GetTerritoriesDocument;
}
