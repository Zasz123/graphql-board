import { Resolvers } from "../../../types/resolvers";
import {
  BoardUpdateMutationArgs,
  BoardUpdateResponse
} from "../../../types/graph";
import Board from "../../../entities/Board";

const resolvers: Resolvers = {
  Mutation: {
    BoardUpdate: async (
      _,
      args: BoardUpdateMutationArgs,
      { ctx }
    ): Promise<BoardUpdateResponse> => {
      const { id, title, descs } = args;
      try {
        const board = await Board.findOne({ id }, { relations: ["user"] });
        if (board?.user.id !== ctx.state.user.id) {
          throw new Error("Wrong User or Token");
        }
        const Updated = await Board.update({ id }, { title, descs });
        if (!Updated) {
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
