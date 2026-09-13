import team30 from 'assets/img/team/30.webp';
import team35 from 'assets/img/team/35.webp';
import team57 from 'assets/img/team/57.webp';
import team59 from 'assets/img/team/59.webp';
import teamAvatar from 'assets/img/team/avatar.webp';
import { Size, Status } from 'components/base/Avatar';

export interface Message {
  id: number;
  avatar: {
    size: Size;
    img: string;
    status: Status;
    imgClass?: string;
  };
  name: string;
  message: string;
}

export const messages: Message[] = [
  {
    id: 1,
    avatar: {
      size: 'm',
      img: team35,
      status: 'online'
    },
    name: 'Stanly Drinkwater',
    message: 'When you gonna pay me back, don’t leave me hanging'
  },
  {
    id: 2,
    avatar: {
      size: 'm',
      img: team30,
      status: 'online'
    },
    name: 'Milind Mikuja',
    message: 'But the mare fact that she said that makes'
  },
  {
    id: 3,
    avatar: {
      size: 'm',
      img: teamAvatar,
      status: 'online',
      imgClass: 'avatar-placeholder'
    },
    name: 'Josef Stravinsky',
    message: 'Oi Cult.'
  },
  {
    id: 4,
    avatar: {
      size: 'm',
      img: team59,
      status: 'online'
    },
    name: 'Martina scorcese',
    message: 'Thanks for that. Sincerely.'
  },
  {
    id: 5,
    avatar: {
      size: 'm',
      img: team57,
      status: 'online'
    },
    name: 'Meekona Zikon',
    message: 'I am Outside, Come here, Lets smoke...'
  }
];
