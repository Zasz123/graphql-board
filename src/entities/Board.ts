import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import Category from "./Category";
import User from "./User";

@Entity()
class Board extends BaseEntity {
  @PrimaryGeneratedColumn() id!: number;

  @Column({ type: "int" })
  userId!: number;

  @Column({ type: "int" })
  categoryId!: number;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  descs!: string;

  @CreateDateColumn()
  createdAt!: string;

  @UpdateDateColumn()
  updatedAt!: string | null;

  @ManyToOne(
    type => User,
    user => user.boards
  )
  @JoinColumn({ name: "userId" })
  user!: User;

  @ManyToOne(
    type => Category,
    category => category.boards
  )
  @JoinColumn({ name: "categoryId" })
  category!: Category;
}

export default Board;
