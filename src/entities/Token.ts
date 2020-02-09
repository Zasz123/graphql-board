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
import User from "./User";

@Entity()
class Token extends BaseEntity {
  @PrimaryGeneratedColumn() id!: number;

  @Column({ type: "text" })
  userId!: number;

  @CreateDateColumn()
  createdAt!: string;

  @UpdateDateColumn()
  updatedAt!: string;

  @ManyToOne(
    type => User,
    user => user.id,
    { onDelete: "CASCADE" }
  )
  @JoinColumn({ name: "userId" })
  user!: User;
}

export default Token;
