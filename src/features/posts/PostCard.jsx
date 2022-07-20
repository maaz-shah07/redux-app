import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

export const PostCard = ({post}) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Card sx={{ width: 500, mt:4 }}>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div">
            {post.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
