import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href={`https://www.github.com/${'theincrediblevee'}`} target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href={`https://www.linkedin.com/in/${'theincrediblevee'}`} target="_blank" rel="noreferrer">
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href={`https://www.instagram.com/${'theincrediblevee'}`} target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
