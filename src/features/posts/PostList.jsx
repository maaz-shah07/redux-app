import React from 'react'
import { selectAllPosts } from './postsSlice';
import { useSelector } from 'react-redux'
import { PostCard } from './PostCard';
import { Box, Typography } from '@mui/material';

export const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map(post => (
    <PostCard key={post.id} post={post} />
  ));

  return (
    <Box>
      <Typography textAlign='center' variant='h2'>
        All Posts
      </Typography>
      {renderedPosts}
    </Box>
  )
}
