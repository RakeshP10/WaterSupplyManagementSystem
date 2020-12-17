import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
/*import chatimage from '../../icons/chatimage.png';*/

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Our Service Your Need! <span role="img" aria-label="emoji">❤️</span></h1>
      <h2>Dear customer please communicate <span role="img" aria-label="emoji">💬</span> open-mindly without a single hesitation.</h2>
      <h2>Water Supply Management System <span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>Online People</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);
export default TextContainer;
