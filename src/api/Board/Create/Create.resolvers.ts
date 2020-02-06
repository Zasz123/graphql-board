import { Resolvers } from "../../../types/resolvers";
import {
  BoardCreateMutationArgs,
  BoardCreateResponse
} from "../../../types/graph";
import Board from "../../../entities/Board";

const resolvers: Resolvers = {
  Mutation: {
    BoardCreate: (
      _,
      args: BoardCreateMutationArgs,
      { ctx }
    ): BoardCreateResponse => {
      try {
        const board = Board.create({
          ...args,
          user: ctx.state.user.id
        }).save();
        if (!board) {
          throw new Error("database error!");
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
