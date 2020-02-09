import { LoginMutationArgs, LoginResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

import crypto from "crypto-js";
import User from "../../../entities/User";

const resolvers: Resolvers = {
  Mutation: {
    Login: async (_, args: LoginMutationArgs): Promise<LoginResponse> => {
      try {
        const { accountId, accountPw } = args;

        const user = await User.findOne({ accountId });
        if (!user) {
          throw new Error("user not found");
        }

        const checkPassword =
          user.accountPw === crypto.SHA256(accountPw).toString();
        if (!checkPassword) {
          throw new Error("password is wrong!");
        }

        const token = await user.accessUserToken();
        return {
          success: true,
          error: null,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken
        };
      } catch (error) {
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
