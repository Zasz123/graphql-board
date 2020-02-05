import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn() id!: number;

  @Column({ type: "text" })
  accountId!: string;

  @Column({ type: "text" })
  accountPw!: string;

  @Column({ type: "text" })
  name!: string;

  @CreateDateColumn()
  createdAt!: string;

  @UpdateDateColumn()
  updatedAt: string | undefined;
}

export default User;
