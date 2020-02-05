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

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  descs!: string;

  @ManyToOne(
    type => User,
    user => user.id
  )
  user!: User;

  @CreateDateColumn()
  createdAt!: string;

  @UpdateDateColumn()
  updatedAt: string | undefined;
}

export default Board;
