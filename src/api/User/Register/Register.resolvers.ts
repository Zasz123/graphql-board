import { Resolvers } from "../../../types/resolvers";
import { RegisterMutationArgs, RegisterResponse } from "../../../types/graph";
import User from "../../../entities/User";

import crypto from "crypto-js";

const resolvers: Resolvers = {
  Mutation: {
    Register: async (
      _,
      args: RegisterMutationArgs
    ): Promise<RegisterResponse> => {
      try {
        const Users = await User.create({
          ...args,
          accountPw: crypto.SHA256(args.accountPw).toString()
        }).save();

        if (Users) {
          return {
            success: true,
            error: null
          };
        } else {
          throw new Error("데이터베이스 에러");
        }
      } catch (error) {
        return {
          success: false,
          error: error.message
        };
      }
    }
  }
};

export default resolvers;
