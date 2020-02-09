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
class Category extends BaseEntity {
  @PrimaryGeneratedColumn() id!: number;

  @Column({ type: "text" })
  name!: string;

  @CreateDateColumn()
  createdAt!: string;

  @UpdateDateColumn()
  updatedAt!: string;

  @OneToMany(
    type => Board,
    board => board.categoryId
  )
  boards: Board[] | undefined;
}

export default Category;
