import React from 'react';
import { Link } from 'gatsby';

export const PageLayout = props => {
  const { location, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link to={'/'}>Gatsby Starter Blog</Link>
      </h1>
    );
  } else {
    header = (
      <h3>
        <Link to={'/'}>Gatsby Starter Blog</Link>
      </h3>
    );
  }
  return (
    <div>
      {header}
      {children}
    </div>
  );
};
