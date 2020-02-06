import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import User from "./User";

@Entity()
class Board extends BaseEntity {
  @PrimaryGeneratedColumn() id!: number;

  @ManyToOne(
    type => User,
    user => user.boards
  )
  user!: User;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  descs!: string;

  @CreateDateColumn()
  createdAt!: string;

  @UpdateDateColumn()
  updatedAt!: string | null;
}

export default Board;
