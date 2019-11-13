import React from 'react';

import Header from './components/Header';
import PostList from './components/PostList';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Header />
      <PostList>
        <Post />
      </PostList>
    </div>
  );
}

export default App;
