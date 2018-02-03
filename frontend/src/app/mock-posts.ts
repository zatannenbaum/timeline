import { Post } from './models/post';
import { environment } from '../environments/environment';

export const POSTS: Post[] = [
  {
    uuid: '7a0ebf08-a12f-4734-b546-ec5ca1769158',
    user: {
      uuid: '3f46ac87-105b-4d38-a384-ffacbbb7d93a',
      first_name: 'Zachary',
      last_name: 'Tannenbaum',
      full_name: 'Zachary Tannenbaum',
      email: 'zach@sighten.io'
    },
    title: 'The Beginning',
    image: `${environment.base_url}/static/formal_2015.jpg`,
    content: 'The day we started dating.',
    date_created: 'January 29, 2018',
    date_of_event: 'February 21, 2015',
  },
  {
    uuid: '0a7ebf08-a12f-4734-b546-ec5ca1769158',
    user: {
      uuid: '3f46ac87-105b-4d38-a384-ffacbbb7d93a',
      first_name: 'Zachary',
      last_name: 'Tannenbaum',
      full_name: 'Zachary Tannenbaum',
      email: 'zach@sighten.io'
    },
    title: 'The Beginning',
    image: `${environment.base_url}/static/formal_2015.jpg`,
    content: 'The day we started dating.',
    date_created: 'January 29, 2018',
    date_of_event: 'February 21, 2015',
  }
]
