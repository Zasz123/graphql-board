import Board from "../../../entities/Board";
import {
  BoardCreateMutationArgs,
  BoardCreateResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    BoardCreate: (
      _,
      args: BoardCreateMutationArgs,
      { user }
    ): BoardCreateResponse => {
      try {
        if (user === "ExpiredToken") {
          return {
            success: false,
            error: "ExpiredToken"
          };
        }
        const board = Board.create({
          ...args,
          userId: user.userId
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
