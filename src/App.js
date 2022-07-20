import React from "react";
import { Header } from './components/header/Header';
import { AddPostForm } from "./features/posts/AddPostForm";
import { PostList } from "./features/posts/PostList";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <AddPostForm />
        <PostList />
      </main>
    </React.Fragment>
  );
}

export default App;
