import React from 'react';
import Helmet from 'react-helmet';
import rehypeReact from 'rehype-react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

import { Bio } from '../components/Bio';
import { PageLayout } from '../components/PageLayout';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h2: () => <h2 className="cray cray" />,
  },
}).Compiler;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const { previous, next } = this.props.pageContext;

    return (
      <PageLayout location={this.props.location}>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        {renderAst(post.htmlAst)}
        <hr />
        <Bio />

        <ul>
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
      </PageLayout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      htmlAst
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
