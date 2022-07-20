import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';


export const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userId);
    if (title.trim() && content.trim()) {
      dispatch(addPost(title, content, userId));
    }
    setTitle('');
    setContent('');
    setUserId('');
  }

  const canSave = Boolean(title.trim() && content.trim() && userId);
  const handleChange = (event) => {
    setUserId(event.target.value);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', p:4, justifyContent:"center"}}>
        <Box>
          <Typography component="h1" sx={{mb:2}}>
            Add Post
          </Typography>
          <TextField value={title} onChange={(e) => setTitle(e.target.value)} sx={{mb:3}} fullWidth id="standard-basic" label="Post Title" variant="standard" />
          <TextField
            fullWidth
            id="standard-multiline-static"
            onChange={(e) => setContent(e.target.value)}
            label="Content"
            multiline
            rows={4}
            value={content}
            variant="standard"
          />
          <FormControl fullWidth required sx={{ mt: 3, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-required-label">Author</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={userId}
              label="Author *"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {users.map(user => (
                <MenuItem key={user.id} value={user.id}>{user.title}</MenuItem>
              ))}
              </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>

          <Button disabled={!canSave} onClick={handleSubmit} variant="contained" color="primary" sx={{mt:3}}>
            Add Post
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  )
}
