import { Resolvers } from "../../../types/resolvers";
import { CreateMutationArgs, CreateResponse } from "../../../types/graph";
import Board from "../../../entities/Board";

const resolvers: Resolvers = {
  Mutation: {
    Create: (_, args: CreateMutationArgs): CreateResponse => {
      try {
        const board = Board.create({ ...args }).save();
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
