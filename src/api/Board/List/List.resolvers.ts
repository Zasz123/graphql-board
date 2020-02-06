import { Resolvers } from "../../../types/resolvers";
import { BoardListQueryArgs, BoardListResponse } from "../../../types/graph";
import Board from "../../../entities/Board";

const resolvers: Resolvers = {
  Query: {
    List: async (_, args: BoardListQueryArgs): Promise<BoardListResponse> => {
      try {
        const List = await Board.find({
          relations: ["user"]
        });

        if (!List) {
          throw new Error("database error!");
        }
        return {
          success: true,
          list: List,
          error: null
        };
      } catch (error) {
        return {
          success: false,
          list: null,
          error: error.message
        };
      }
    }
  }
};

export default resolvers;
