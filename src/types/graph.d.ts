export const typeDefs = ["type Board {\n  id: Int!\n  title: String!\n  descs: String!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Query {\n  Board: Board\n  User: User\n}\n\ntype RegisterResponse {\n  success: Boolean!\n  error: String\n}\n\ntype Mutation {\n  Register(userId: String!, userPw: String!, userName: String!): RegisterResponse!\n}\n\ntype User {\n  id: Int!\n  userId: String!\n  userPw: String!\n  userName: String!\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  Board: Board | null;
  User: User | null;
}

export interface Board {
  id: number;
  title: string;
  descs: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface User {
  id: number;
  userId: string;
  userPw: string;
  userName: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface Mutation {
  Register: RegisterResponse;
}

export interface RegisterMutationArgs {
  userId: string;
  userPw: string;
  userName: string;
}

export interface RegisterResponse {
  success: boolean;
  error: string | null;
}
