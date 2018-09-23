import { createElement } from 'react';
import rehypeReact from 'rehype-react';
import { h1, h2, h3 } from './blocks/Headers';

export const astBlogPostFactory = getComponents => {
  const theme = {};

  const components = {
    h1,
    h2,
    h3,
    ...getComponents(theme),
  };
  return new rehypeReact({
    createElement,
    components,
  }).Compiler;
};
