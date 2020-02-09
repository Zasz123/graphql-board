import Board from "../../../entities/Board";
import {
  BoardUpdateMutationArgs,
  BoardUpdateResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    BoardUpdate: async (
      _,
      args: BoardUpdateMutationArgs,
      { user }
    ): Promise<BoardUpdateResponse> => {
      if (user === "ExpiredToken") {
        return {
          success: true,
          error: "ExpiredToken"
        };
      }
      const { id, title, descs } = args;
      try {
        const board = await Board.findOne({ id }, { relations: ["user"] });
        if (board?.user.id !== user.id) {
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
