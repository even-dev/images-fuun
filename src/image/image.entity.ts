import {
  Entity,
  Column,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

interface IImage {
  id?: number;
  link: string;
}

@Entity()
export class Image {
  constructor(iImage?: IImage) {
    if (iImage) {
      if (iImage.id) this.id = iImage.id;
      this.link = iImage.link;
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  add_date: Date;

  @UpdateDateColumn()
  update_date: Date;

  @Column({ nullable: false })
  link: string;
}
