import { Context } from "koa";
import { RefreshResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import { refresh } from "../../../utils/token";

const resolvers: Resolvers = {
  Mutation: {
    Refresh: async (_, __, { ctx }): Promise<RefreshResponse> => {
      try {
        const { refreshtoken } = ctx.headers;
        const tokens = await refresh(ctx, refreshtoken);
        console.log(tokens);
        return {
          success: true,
          error: null,
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken
        };
      } catch (error) {
        console.log(error);
        return {
          success: false,
          error: error.message,
          accessToken: null,
          refreshToken: null
        };
      }
    }
  }
};

export default resolvers;
