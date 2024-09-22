import React, { useEffect } from 'react';
import { useState } from 'react';

const storeFromServer = {
  users: [
    {
      id: 1,
      name: 'Ivan Ivanov'
    },
    {
      id: 3,
      name: 'Petr Petrov'
    },
    {
      id: 5,
      name: 'Stepan Stepanov'
    },
  ],
  messages: [
    {
      id: 1,
      body: 'message #1',
      authorId: 1
    },
    {
      id: 2,
      body: 'message #2',
      authorId: 3
    },
    {
      id: 3,
      body: 'message #3',
      authorId: 1
    },
    {
      id: 4,
      body: 'message #4',
      authorId: 5
    },
  ]
}

const Chat1 = () => {
  const [store, setStore] = useState({ users: [], messages: [] });
  useEffect(() => {
    //зробили запит на сервер
    setStore(storeFromServer);
  }, [])
  return (
    <div>
      <h1>Chat1</h1>
      {
        store.messages.map(message => {
          return (
            <p key={message.id}>
              {store.users.find(user => user.id === message.authorId).name}
              {"-->"}
              {message.body}
            </p>
          )
        })
      }
    </div>
  );
}

export default Chat1;
