import { Context } from "koa";
import { RefreshMutationArgs, RefreshResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import { refresh } from "../../../utils/token";

const resolvers: Resolvers = {
  Mutation: {
    Refresh: async (
      _,
      args: RefreshMutationArgs,
      ctx: Context
    ): Promise<RefreshResponse> => {
      try {
        const { refreshToken } = ctx.headers;
        const tokens = await refresh(ctx, refreshToken);
        return {
          success: true,
          error: null,
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken
        };
      } catch (error) {
        return {
          success: false,
          error: null,
          accessToken: null,
          refreshToken: null
        };
      }
    }
  }
};

export default resolvers;
