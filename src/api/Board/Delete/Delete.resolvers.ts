import { Resolvers } from "../../../types/resolvers";
import {
  BoardDeleteMutationArgs,
  BoardDeleteResponse
} from "../../../types/graph";
import Board from "../../../entities/Board";

const resolvers: Resolvers = {
  Mutation: {
    BoardDelete: async (
      _,
      { id }: BoardDeleteMutationArgs,
      { ctx }
    ): Promise<BoardDeleteResponse> => {
      try {
        const board = await Board.findOne({ id }, { relations: ["user"] });
        if (board?.user.id !== ctx.state.user.id) {
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
