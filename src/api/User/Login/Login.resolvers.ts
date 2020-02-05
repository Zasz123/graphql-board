import { Resolvers } from "../../../types/resolvers";
import { LoginMutationArgs, LoginResponse } from "../../../types/graph";

import crypto from "crypto-js";
import User from "../../../entities/User";
import createJWT from "../../../utils/createJWT";

const resolvers: Resolvers = {
  Query: {
    User: (parent, args, { state }) => {
      console.log(state);
      return "";
    }
  },
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

        const token = createJWT(user.id);
        return {
          success: true,
          error: null,
          token
        };
      } catch (error) {
        return {
          success: false,
          error: error.message,
          token: null
        };
      }
    }
  }
};

export default resolvers;
