import Board from "../../../entities/Board";
import {
  BoardDeleteMutationArgs,
  BoardDeleteResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    BoardDelete: async (
      _,
      { id }: BoardDeleteMutationArgs,
      { user }
    ): Promise<BoardDeleteResponse> => {
      if (user === "ExpiredToken") {
        return {
          success: true,
          error: "ExpiredToken"
        };
      }
      try {
        const board = await Board.findOne({ id }, { relations: ["user"] });
        if (board?.user.id !== user.id) {
          throw new Error("Wrong User or Token");
        }
        const Deleted = await Board.delete({ id });
        if (!Deleted) {
          throw new Error("Database Error");
        }
        return {
          success: true,
          error: null
        };
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
