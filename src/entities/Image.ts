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
import Board from "./Board";

@Entity()
class Image extends BaseEntity {
  @PrimaryGeneratedColumn() id!: number;

  @Column({ type: "int" })
  boardId!: number;

  @Column({ type: "text" })
  path!: string;

  @CreateDateColumn()
  createdAt!: string;

  @UpdateDateColumn()
  updatedAt!: string | null;

  @ManyToOne(
    type => Board,
    board => board.id
  )
  @JoinColumn({ name: "boardId" })
  board!: Board;
}

export default Image;
