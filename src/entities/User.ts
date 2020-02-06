import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";
import Board from "./Board";

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
}

export default User;
