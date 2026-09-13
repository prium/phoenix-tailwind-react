import { Input, cn } from '@hummingbirdui/react';
import Avatar from 'components/base/Avatar';
import { Link } from 'react-router';

interface CommentFieldProps {
  avatar: string;
  className?: string;
}

/** `+CommentField` in mixins/social/Feed.pug */
const CommentField = ({ avatar, className }: CommentFieldProps) => {
  return (
    <div className={cn('flex items-center', className)}>
      <Link to="/apps/social/profile">
        <Avatar size="m" src={avatar} className="me-2" />
      </Link>
      <div className="flex-1">
        <Input type="text" placeholder="Add comment" />
      </div>
    </div>
  );
};

export default CommentField;
