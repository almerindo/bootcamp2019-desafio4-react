import React, { Component } from 'react';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Almerindo Rehem',
          avatar:
            'https://media.licdn.com/dms/image/C4D03AQE9-IFk9fp41Q/profile-displayphoto-shrink_200_200/0?e=1579132800&v=beta&t=Uku7n77kfsb2Yot792KcbwZiWZoStqGbOPkQWQ_6kcE',
        },
        date: new Date(),
        content: 'Vamos configurar um analisador de Whatszap?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'http://url-da-imagem.com/imagem.jpg',
            },
            content: 'Conteúdo do comentário',
          },
        ],
      },
      {
        id: 2,
        // Restante dos dados de um novo post
      },
    ],
  };

  render() {
    return (
      <div>
        <p>COMPONENTE POSTLIST</p>
      </div>
    );
  }
}

export default PostList;
