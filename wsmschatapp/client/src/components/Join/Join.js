import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Solve Your Queries</h1>
        <div>
          <input placeholder="Enter your name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Enter your window ID" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Let's Talk!</button>
        </Link>
        <h1 className="heading">Query Window ID </h1>
        <h3 className="queries">Queries about product: About Product</h3>
        <h3 className="queries">Queries about order: About Order</h3>
        <h3 className="queries">Queries about delivery: About Delivery</h3>
        <h3 className="queries">Queries about payment: About Payment</h3>
        <h3 className="queries">Queries about other: Other</h3>
      </div>
    </div>
  );
}
