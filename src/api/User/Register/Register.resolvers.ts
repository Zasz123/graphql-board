import { Resolvers } from "../../../types/resolvers";
import { RegisterMutationArgs, RegisterResponse } from "../../../types/graph";
import User from "../../../entities/User";

const resolvers: Resolvers = {
  Mutation: {
    Register: async (
      _,
      args: RegisterMutationArgs
    ): Promise<RegisterResponse> => {
      try {
        const Users = await User.create({ ...args });
        if (Users) {
          return {
            success: true,
            error: null
          };
        } else {
          throw new Error("잘못됨");
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
