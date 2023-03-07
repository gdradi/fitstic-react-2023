import { Button, Select } from 'antd';
import React, { useState } from 'react';
import { EsercizioPost, Post } from './EsercizioPost';
import { Header } from './Header';

export const App: React.FunctionComponent = () => {
  const myTitle = "Mio titolo 1";

  // Definizione di uno stato "counter" di tipo number
  const [counter, setCounter] = useState<number>(0);
  const counterNegativo = -counter;

  const [post, setPost] = useState<Post>({ author: "", body: "" });

  console.log("App!");

  return <div>

    <Button disabled={false} ghost={true} type="primary">Primary Button</Button>

    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      // onChange={handleChange}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />

    {/* <Header title={myTitle} /> */}
    <Header title={myTitle} className="red-text" />
    <div>Ciao sono app!</div>

    <EsercizioPost post={post} setPost={setPost} />
    {post.author.length > 0 && <div>C'è un post!</div>}

    {/* <Display counter={counter} />
    <Display counter={counterNegativo} />
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Bottone</button> */}
  </div>
}