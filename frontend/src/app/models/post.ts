import { User } from './user';

export class Post {
  uuid: string;
  created_by_user: User;
  title: string;
  image_url: string;
  content: string;
  date_created: string;
  date_updated: string;
  date_of_event: string;
}
