import React from 'react';
import styled from 'react-emotion';
import profilePic from './profile-pic.jpg';

const GreenLink = styled.a`
  color: orange;
  &:hover {
    color: yellow;
  }
`;

export const Bio = () => {
  return (
    <div>
      <img src={profilePic} alt={`Kyle Mathews`} />
      <p>
        Written by <strong>Kyle Mathews</strong> who lives and works in San Francisco building
        useful things.{' '}
        <GreenLink href="https://twitter.com/kylemathews">
          You should follow him on Twitter
        </GreenLink>
      </p>
    </div>
  );
};
