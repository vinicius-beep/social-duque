import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from './User';
import { Post } from './Post';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  content: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Post)
  post: Post;

  @CreateDateColumn()
  created_at: Date;
}
