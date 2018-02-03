import { User } from './user';

export class Post {
  uuid: string;
  user: User;
  title: string;
  image: string;
  content: string;
  date_created: string;
  date_of_event: string;
}
