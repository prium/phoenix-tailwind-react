import PostCard from 'components/modules/social/PostCard';
import { Post } from 'data/social/postsData';
import { Button } from 'react-bootstrap';

interface SocialPostsProps {
  posts: Post[];
}

const SocialPosts = ({ posts }: SocialPostsProps) => {
  return (
    <>
      <div className="mb-16">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="text-center">
        <Button variant="link" className="text-base p-0">
          Load more
        </Button>
      </div>
    </>
  );
};

export default SocialPosts;
