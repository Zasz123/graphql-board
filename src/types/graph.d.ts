export const typeDefs = ["type CreateResponse {\n  success: Boolean!\n  error: String\n}\n\ntype Mutation {\n  Create(title: String!, descs: String!): CreateResponse!\n  Login(accountId: String!, accountPw: String!): LoginResponse!\n  Register(accountId: String!, accountPw: String!, name: String!): RegisterResponse!\n}\n\ntype Board {\n  id: Int!\n  user: User\n  title: String!\n  descs: String!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Query {\n  Board: Board\n  User: User\n}\n\ntype LoginResponse {\n  success: Boolean!\n  error: String\n  token: String\n}\n\ntype RegisterResponse {\n  success: Boolean!\n  error: String\n}\n\ntype User {\n  id: Int!\n  accountId: String!\n  accountPw: String!\n  name: String!\n  board: [Board]\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  Board: Board | null;
  User: User | null;
}

export interface Board {
  id: number;
  user: User | null;
  title: string;
  descs: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface User {
  id: number;
  accountId: string;
  accountPw: string;
  name: string;
  board: Array<Board> | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Mutation {
  Create: CreateResponse;
  Login: LoginResponse;
  Register: RegisterResponse;
}

export interface CreateMutationArgs {
  title: string;
  descs: string;
}

export interface LoginMutationArgs {
  accountId: string;
  accountPw: string;
}

export interface RegisterMutationArgs {
  accountId: string;
  accountPw: string;
  name: string;
}

export interface CreateResponse {
  success: boolean;
  error: string | null;
}

export interface LoginResponse {
  success: boolean;
  error: string | null;
  token: string | null;
}

export interface RegisterResponse {
  success: boolean;
  error: string | null;
}
