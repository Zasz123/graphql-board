import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { createToken } from "../utils/token";
import Board from "./Board";
import Token from "./Token";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn() id!: number;

  @Column({ type: "text" })
  accountId!: string;

  @Column({ type: "text" })
  accountPw!: string;

  @Column({ type: "text" })
  name!: string;

  @OneToMany(
    type => Board,
    board => board.user
  )
  boards: Board[] | undefined;

  @CreateDateColumn()
  createdAt!: string;

  @UpdateDateColumn()
  updatedAt!: string | null;

  async accessUserToken() {
    const token = new Token();
    token.userId = this.id;
    await Token.save(token);

    const refreshToken = await createToken(
      {
        userId: this.id,
        tokenId: token.id
      },
      {
        subject: "refreshToken",
        expiresIn: "30d"
      }
    );

    const accessToken = await createToken(
      {
        userId: this.id
      },
      {
        subject: "accessToken",
        expiresIn: "2h"
      }
    );

    return {
      refreshToken,
      accessToken
    };
  }

  async refreshUserToken(
    tokenId: string,
    refreshTokenExp: number,
    originRefreshToken: string
  ) {
    const now = new Date().getTime();
    const diff = refreshTokenExp * 1000 - now;

    let refreshToken = originRefreshToken;

    if (diff < 1000 * 60 * 60 * 24 * 15) {
      refreshToken = await createToken(
        {
          userId: this.id,
          tokenId
        },
        {
          subject: "refreshToken",
          expiresIn: "30d"
        }
      );
    }
    const accessToken = await createToken(
      {
        userId: this.id
      },
      {
        subject: "accessToken",
        expiresIn: "2h"
      }
    );

    return {
      refreshToken,
      accessToken
    };
  }
}

export default User;
