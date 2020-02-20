import React from 'react';
import classNames from 'classnames';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Slideshow from '../components/Sllideshow';
import Button from '../components/Button';
import Content, { HTMLContent } from '../components/Content';

export const HardwarePageTemplate = ({
  featuredimages,
  heading,
  shortDescription,
  highlightSpecifications,
  allSpecifications,
  // textAndImages,
  contentComponent,
  content,
}) => {
  const PostContent = contentComponent || Content;
  return (
    <>
      <section className="section has-dark-background">
        <div className="container">
          <Slideshow content={featuredimages} />
        </div>
      </section>
      <section
        className="section  has-dark-background"
        id="product-description"
      >
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <h2>{heading}</h2>
            </div>
            <div className="column is-half">
              <p>
                <strong>Beskrivelse</strong>
              </p>
              <p>{shortDescription}</p>
              <Button
                text="Les mer"
                className={classNames('is-link')}
                link="#product-specifications"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="section has-dark-background"
        id="highlighted-specifications"
      >
        <div className="container">
          <p>
            <strong>Spesifikasjoner</strong>
          </p>
          {highlightSpecifications.map(spec => (
            <>
              <p>{spec.value}</p>
              <p>{spec.description}</p>
            </>
          ))}
        </div>
      </section>
      <section className="section has-dark-background" id="all-specifications">
        <div className="container">
          {allSpecifications.map(spec => (
            <>
              <p>
                {spec.heading}: {spec.description}
              </p>
            </>
          ))}
        </div>
      </section>
      <section className="section has-dark-background free-text-centered">
        <div className="container">
          <PostContent content={content} />
        </div>
      </section>
    </>
  );
};

const HardwarePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  if (!frontmatter) return <></>;
  const {
    title,
    featuredimages,
    heading,
    shortDescription,
    seoDescription,
    highlightSpecifications,
    allSpecifications,
    textAndImages,
  } = frontmatter;

  return (
    <Layout seoDescription={seoDescription} seoTitle={title}>
      <HardwarePageTemplate
        content={data.markdownRemark.html}
        contentComponent={HTMLContent}
        featuredimages={featuredimages}
        heading={heading}
        shortDescription={shortDescription}
        seoDescription={seoDescription}
        highlightSpecifications={highlightSpecifications}
        allSpecifications={allSpecifications}
        textAndImages={textAndImages}
      />
    </Layout>
  );
};

export default HardwarePage;

export const HardwarePageQuery = graphql`
  query HardwarePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        featuredimages {
          alt
          img {
            childImageSharp {
              fluid(maxHeight: 790) {
                ...GatsbyImageSharpFluid_tracedSVG
                presentationWidth
              }
            }
          }
        }
        heading
        shortDescription
        seoDescription
        highlightSpecifications {
          value
          description
        }
        allSpecifications {
          heading
          description
        }
        textAndImages {
          heading
          description
          img {
            childImageSharp {
              fluid(maxHeight: 790) {
                ...GatsbyImageSharpFluid_tracedSVG
                presentationWidth
              }
            }
          }
        }
      }
    }
  }
`;
