import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Content, { HTMLContent } from '../components/Content';
import Carousel from '../components/Carousel';
import Title from '../components/Title';
import SEO from '../components/SEO';
import RecentArticles from '../components/RecentArticles';
import controlroomImage from '../img/sealab-controller-livestream.png';
import iotImage from '../img/sealabProPackage.png';
import tabletBTGOImage from '../img/tablet-holding-portrait.jpg';

import fishVideoMP4 from '../videos/fishVideo.mp4';
import fishVideoWebM from '../videos/fishVideo.webm';

import reliableIcon from '../img/reliable.svg';
import installationIcon from '../img/easy-instalation.svg';
import serviceWarrantyIcon from '../img/service-warranty.svg';
import norwayIcon from '../img/norway-manufacture.svg';

const featured = [
  { title: 'Driftsikkert', icon: reliableIcon },
  { title: 'Enkel installasjon', icon: installationIcon },
  { title: 'Servicegaranti', icon: serviceWarrantyIcon },
  { title: 'Utviklet, designet og produsert i Norge', icon: norwayIcon },
];

const carouselItems = [
  {
    img: iotImage,
    title: 'Internet of Things',
    description:
      'Kamerasystemet integrerer undervannskamera, overflatekamera, lys, sensorikk, mekanikk og programvare som alle kommuniserer sammen.',
  },
  {
    img: controlroomImage,
    title: 'BlueThink™ Apps',
    description:
      'Fra BlueThink Kontrollrom har du tilgang til Livestream i tillegg til alle dine BlueThink Apps. ',
  },
  {
    img: tabletBTGOImage,
    title: 'BlueThink™ GO',
    description:
      'Med BlueThink™ GO kan du følge med på anlegget ditt når som helst, fra hvor som helst.',
  },
];

export const LivestreamPageTemplate = ({
  title,
  content,
  contentComponent,
  heading,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <SEO title={title} />
      <section
        id="livestream-hero"
        className="section is-medium has-dark-background"
      >
        <div className="container">
          <div className="columns  reverse-row-order">
            <div className="column children-padding">
              <h1>{heading}</h1>
              <p>
                Kontinuerlig overvåking er den beste beslutningsstøtten som
                finnes. Med vår unike kamerateknologi og software, som
                kommuniserer sammen (IoT), får du høykvalitets overvåkingsbilder
                rett inn i ditt BlueThink Kontrollrom. Et lynskarpt blikk på det
                som foregår i merdene kan bidra til høyere forutsigbarhet,
                lavere dødelighet og bedre fiskevelferd.
              </p>
              <Button
                text="Kontakt oss"
                link="/kontakt"
                className="is-primary"
              />
            </div>
            <div className="column ">
              {/* <div
                id="livestream-hero-image"
                style={{
                  background: `linear-gradient(270deg, #0E111B 24.5%, rgba(14, 17, 27, 0) 46.92%), linear-gradient(0deg, #0E111B 0%, rgba(14, 17, 27, 0) 25%), url(${controlroomImage})`,
                }}
              /> */}
              <figure className="image">
                <img src={controlroomImage} alt="Kontrollrom" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="video section has-dark-background">
        <div className="video-background">
          <video
            style={{ objectFit: 'cover' }}
            poster="img/bgimg.jpg"
            id="bgvid"
            playsInline
            autoPlay
            muted
            loop
          >
            <source src={fishVideoWebM} type="video/webm" />
            <source src={fishVideoMP4} type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="content has-white-background">
            <p>
              Ved hjelp av våre unike LED-lys kan du følge med på laksen om
              natten eller på større dybde. LED-lyset følger kameraet til alle
              dybder.
            </p>
          </div>
        </div>
      </section>
      <section id="features" className="section has-dark-background">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <Title
                title="BlueThink Kontrollrom"
                subtitle="Hardware og Software, Produsert i Norge"
                description="Både hardware og software produseres i Norge. Slik får du en lynrask levering og driftsikker løsning. Produktene er utviklet slik at de behøver minimalt med vedlikehold og er enkle å installere. Ønsker du livestream fra ditt anlegg, kan vi sette opp et helhetlig system på få timer. Skulle du trenge hjelp, er service telefonen bemannet 24 timer i døgnet."
                position="left"
              />
              <PageContent className="content" content={content} />
            </div>
          </div>
          <div id="features-icons" className="columns">
            {featured.map(featuredElement => (
              <div className="features-icons-item column is-3">
                <figure className="image">
                  <img src={featuredElement.icon} alt="Icon" />
                </figure>
                <h4>{featuredElement.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="solution-carousel" className="section has-dark-background">
        <div className="container">
          <Title
            title="Livestream løsning"
            description="BlueThink Kontrollrom baseres på interaksjon mellom en rekke produkter som kombinert gir førsteklasses overvåkning av ditt anlegget. "
            position="center"
          />
          <Carousel items={carouselItems} />
        </div>
      </section>
      <RecentArticles />
    </>
  );
};

LivestreamPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const LivestreamPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <LivestreamPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        content={post.html}
      />
    </Layout>
  );
};

LivestreamPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LivestreamPage;

export const LivestreamPageQuery = graphql`
  query LivestreamPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
      }
    }
  }
`;
