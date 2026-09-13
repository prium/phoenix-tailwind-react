import { cn } from '@hummingbirdui/react';
import PostCard from 'components/modules/social/PostCard';
import { Post } from 'data/social/postsData';

interface SocialPostsProps {
  posts: Post[];
  /** Gold feed adds `text-primary` to the Load more link; profile does not. */
  loadMoreClassName?: string;
}

/** `+PostList` / `+ProfilePostList` + the page-level Load more link */
const SocialPosts = ({ posts, loadMoreClassName }: SocialPostsProps) => {
  return (
    <>
      <div className="mb-16">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="text-center">
        <a
          href="#!"
          className={cn('btn btn-link text-base p-0', loadMoreClassName)}
        >
          Load more
        </a>
      </div>
    </>
  );
};

export default SocialPosts;
