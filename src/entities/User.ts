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
  @PrimaryGeneratedColumn() id: number | undefined;

  @Column({ type: "text" })
  userId: string | undefined;

  @Column({ type: "text" })
  userPw: string | undefined;

  @Column({ type: "text" })
  userName: string | undefined;

  @CreateDateColumn()
  createdAt: string | undefined;

  @UpdateDateColumn()
  updatedAt: string | undefined;
}

export default User;
