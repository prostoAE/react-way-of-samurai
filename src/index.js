import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let posts = [
  {id: 1, message: 'Hi, how are you?', likesCount: 12},
  {id: 2, message: 'Its my first post', likesCount: 3},
  {id: 3, message: 'First message', likesCount: 0},
  {id: 4, message: 'Bla bla', likesCount: 1},
];

let dialogs = [
  {id: 1, name: 'Andrey'},
  {id: 2, name: 'Petr'},
  {id: 3, name: 'Fedya'},
  {id: 4, name: 'Stepan'},
  {id: 5, name: 'Valerij'},
  {id: 6, name: 'Sveta'}
];

let messages = [
  {id: 1, message: 'hi'},
  {id: 2, message: 'how are you?'},
  {id: 3, message: 'Do you have money'},
  {id: 4, message: 'How much?'},
  {id: 5, message: 'Do you speak English?'},
  {id: 6, message: 'Yes. Off cose'}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

