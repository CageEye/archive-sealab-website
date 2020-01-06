import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import LayoutNoNav from '../components/LayoutNoNav';
import SEO from '../components/SEO';
import Hero from '../components/HeroVideo';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import Button from '../components/Button';
import RecentArticles from '../components/RecentArticles';
import fishVideoMP4 from '../videos/fishVideo.mp4';
import fishVideoWebM from '../videos/fishVideo.webm';
import ControlRoomImage from '../img/sealab-controller-livestream-AIS.jpg';
import DNLogo from '../img/Logos/Mentioned/Default/DN-Logo.png';
import OpdalingenLogofrom from '../img/Logos/Mentioned/Default/opdalingen-logo.png';
import TULogo from '../img/Logos/Mentioned/Default/tu.no-logo.png';
import ILaksLogo from '../img/Logos/Mentioned/Default/ilaksno-logo.png';
import KystNoLogo from '../img/Logos/Mentioned/Default/kystno-logo.png';

export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  threeColumns,
}) => (
  <section className="has-dark-background">
    <SEO title={title} />
    <Hero
      title={heading}
      subtitle={subheading}
      Navbar={Navbar}
      callToActionLink="/kontakt"
      callToActionText="Kontakt oss"
      secondaryCallToActionLink="/livestream"
      secondaryCallToActionText="Les mer"
      backgroundVideoMP4={fishVideoMP4}
      backgroundVideoWebM={fishVideoWebM}
    />
    <section id="product" className="section has-dark-background">
      <div className="container">
        <section id="machineVision" className="section is-medium">
          <div className="columns">
            <div className="column is-6 is-offset-3 has-text-centered">
              <Title
                title={threeColumns.heading}
                subtitle={threeColumns.subheading}
                description={threeColumns.description}
                position="center"
              />
            </div>
          </div>
          <div id="machineIcons" className="columns">
            {threeColumns.columns.map(iconColumn => {
              const { icon } = iconColumn;

              return (
                <div className="column is-4">
                  <figure className="image">
                    <img src={icon.publicURL} alt={icon} />
                  </figure>
                  <h4>{iconColumn.heading}</h4>
                  <p>{iconColumn.description}</p>
                  <Button
                    className="is-transparent"
                    text="Les mer"
                    link={iconColumn.buttonPath}
                  />
                </div>
              );
            })}
          </div>
        </section>
        <section id="livestream" className="section is-medium">
          <figure className="image">
            <img src={ControlRoomImage} alt="Sealabs livestream control room" />
          </figure>
          <div className="columns">
            <div className="column is-4">
              <Title
                title="BlueThink gir høykvalitets Livestream av ditt anlegg"
                subtitle="2D og 3D kamera"
                position="left"
              />
            </div>
            <div className="column is-7 is-offset-1">
              <p>
                SEALAB utvikler unike kamerasystemer med sylskarpe bilder for
                overvåking og analyse i havbruksnæringen. Livestreamen gir deg
                kontroll både på laksen i merdene og anlegget generelt.
                Systemene integrerer kamera, lys, sensorikk, mekanikk og
                programvare som alle kommuniserer sammen (IoT).
              </p>
              <Button
                className="is-secondary"
                text="Les mer"
                link="/livestream"
              />
            </div>
          </div>
        </section>
        <section id="published" className="section">
          <h3 className="has-text-centered">
            Hvem har publisert vår historie?
          </h3>
          <div className="columns has-text-centered">
            <MentionedInLogo img={DNLogo} />
            <MentionedInLogo img={OpdalingenLogofrom} />
            <MentionedInLogo img={TULogo} />
            <MentionedInLogo img={ILaksLogo} />
            <MentionedInLogo img={KystNoLogo} />
          </div>
        </section>
        <section id="tablet" className="section is-medium">
          <div className="columns">
            <div className="column is-6 is-offset-3 has-text-centered">
              <Title
                title="BlueThink™ GO - Tilgjengelig på alle enheter"
                subtitle="Mobilt kontrollrom"
                description="Med BlueThink™ GO får du fjerntilgang til kameraovervåkning, sensordata, værdata, sjøforhold og mye mer, direkte fra ditt anlegg."
                position="center"
              />
              <div className="columns">
                <div className="column">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button is-transparent"
                    href="http://sealab.live/"
                  >
                    Se demo
                  </a>
                </div>
                <div className="column">
                  <Button
                    className="is-primary"
                    text="Les mer"
                    link="/bluethink-go"
                  />
                </div>
              </div>
            </div>
          </div>
          <figure className="image">
            <img width="500px" src="/img/allInOne.png" alt="BlueThink GO" />
          </figure>
        </section>
      </div>
    </section>
  </section>
);

const MentionedInLogo = ({ img }) => (
  <div className="column is-2" style={{ margin: 'auto' }}>
    <figure className="image">
      <img
        style={{ height: '35px', width: 'auto', margin: 'auto' }}
        src={img}
        alt={img}
      />
    </figure>
  </div>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <LayoutNoNav>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        threeColumns={frontmatter.threeColumns}
      />

      <RecentArticles />
    </LayoutNoNav>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        threeColumns {
          heading
          subheading
          description
          columns {
            heading
            description
            buttonPath
            icon {
              publicURL
            }
          }
        }
      }
    }
  }
`;
