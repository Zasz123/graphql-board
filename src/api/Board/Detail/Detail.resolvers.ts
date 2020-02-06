import { Resolvers } from "../../../types/resolvers";
import {
  BoardDetailQueryArgs,
  BoardDetailResponse
} from "../../../types/graph";
import Board from "../../../entities/Board";

const resolvers: Resolvers = {
  Query: {
    BoardDetail: async (
      _,
      { id }: BoardDetailQueryArgs
    ): Promise<BoardDetailResponse> => {
      try {
        const Detail = await Board.findOne({ id }, { relations: ["user"] });

        if (!Detail) {
          throw new Error("404Error 해당 페이지는 존재하지 않습니다.");
        }
        return {
          success: true,
          board: Detail,
          error: null
        };
      } catch (error) {
        return {
          success: false,
          board: null,
          error: error.message
        };
      }
    }
  }
};

export default resolvers;
