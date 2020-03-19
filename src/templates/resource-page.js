import React from 'react';
import { graphql } from 'gatsby';
// import Img from 'gatsby-image';
import Content, { HTMLContent } from '../components/Content';

import Layout from '../components/Layout';

const ResourceIndexPageTemplate = ({
  heading,
  productSheets,
  userManuals,
  releaseNotes,
  images,
  contentComponent,
  content,
}) => {
  const PostContent = contentComponent || Content;
  console.log(productSheets);
  console.log(userManuals);
  console.log(releaseNotes);
  console.log(images);
  const productSheetTitle = 'Produktark';
  const userManualsTitle = 'Brukermanualer';

  return (
    <>
      <section
        id="resources"
        className="section has-dark-background has-text-centered"
      >
        <div className="container">
          <header>
            <h1>{heading}</h1>
            <PostContent content={content} />
          </header>
        </div>
      </section>
    </>
  );
};

const ResourcePage = ({ data }) => {
  const { index: post } = data;
  const { frontmatter } = post;

  const { html } = post;
  const {
    title,
    heading,
    product_sheets: productSheets,
    user_manuals: userManuals,
    release_notes: releaseNotes,
  } = frontmatter;

  return (
    <Layout seoTitle={title}>
      <ResourceIndexPageTemplate
        content={html}
        contentComponent={HTMLContent}
        heading={heading}
        productSheets={productSheets}
        userManuals={userManuals}
        releaseNotes={releaseNotes}
      />
    </Layout>
  );
};

export const ResourcePageQuery = graphql`
  query ResourcePageQuery($id: String!) {
    index: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        heading

        product_sheets {
          heading
          subheading
          file
          icon
          type
        }

        user_manuals {
          heading
          subheading
          file
          icon
          type
        }

        release_notes {
          heading
          description
          file
          icon
          type
          date
        }
      }
    }
  }
`;

export default ResourcePage;
