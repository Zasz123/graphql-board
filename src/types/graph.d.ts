export const typeDefs = ["type BoardCreateResponse {\n  success: Boolean!\n  error: String\n}\n\ntype Mutation {\n  BoardCreate(title: String!, descs: String!): BoardCreateResponse!\n  BoardDelete(id: Int!): BoardDeleteResponse\n  BoardUpdate(id: Int!, title: String!, descs: String!): BoardUpdateResponse\n  Login(accountId: String!, accountPw: String!): LoginResponse\n  Refresh: RefreshResponse\n  Register(accountId: String!, accountPw: String!, name: String!): RegisterResponse!\n}\n\ntype BoardDeleteResponse {\n  success: Boolean!\n  error: String\n}\n\ntype BoardDetailResponse {\n  success: Boolean!\n  board: Board\n  error: String\n}\n\ntype Query {\n  BoardDetail(id: Int!): BoardDetailResponse!\n  BoardList(category: String, page: String): BoardListResponse\n  Board: Board\n  User: User\n}\n\ntype BoardListResponse {\n  success: Boolean!\n  list: [Board]\n  error: String\n}\n\ntype Board {\n  id: Int!\n  user: User!\n  title: String!\n  descs: String!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype BoardUpdateResponse {\n  success: Boolean!\n  error: String\n}\n\ntype LoginResponse {\n  success: Boolean!\n  error: String\n  accessToken: String\n  refreshToken: String\n}\n\ntype RefreshResponse {\n  success: Boolean!\n  error: String\n  accessToken: String\n  refreshToken: String\n}\n\ntype RegisterResponse {\n  success: Boolean!\n  error: String\n}\n\ntype User {\n  id: Int!\n  accountId: String!\n  accountPw: String!\n  name: String!\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  BoardDetail: BoardDetailResponse;
  BoardList: BoardListResponse | null;
  Board: Board | null;
  User: User | null;
}

export interface BoardDetailQueryArgs {
  id: number;
}

export interface BoardListQueryArgs {
  category: string | null;
  page: string | null;
}

export interface BoardDetailResponse {
  success: boolean;
  board: Board | null;
  error: string | null;
}

export interface Board {
  id: number;
  user: User;
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
  createdAt: string;
  updatedAt: string | null;
}

export interface BoardListResponse {
  success: boolean;
  list: Array<Board> | null;
  error: string | null;
}

export interface Mutation {
  BoardCreate: BoardCreateResponse;
  BoardDelete: BoardDeleteResponse | null;
  BoardUpdate: BoardUpdateResponse | null;
  Login: LoginResponse | null;
  Refresh: RefreshResponse | null;
  Register: RegisterResponse;
}

export interface BoardCreateMutationArgs {
  title: string;
  descs: string;
}

export interface BoardDeleteMutationArgs {
  id: number;
}

export interface BoardUpdateMutationArgs {
  id: number;
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

export interface BoardCreateResponse {
  success: boolean;
  error: string | null;
}

export interface BoardDeleteResponse {
  success: boolean;
  error: string | null;
}

export interface BoardUpdateResponse {
  success: boolean;
  error: string | null;
}

export interface LoginResponse {
  success: boolean;
  error: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

export interface RefreshResponse {
  success: boolean;
  error: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

export interface RegisterResponse {
  success: boolean;
  error: string | null;
}
