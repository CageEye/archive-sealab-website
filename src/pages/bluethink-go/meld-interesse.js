import React from 'react';
import ContactFormProduct from '../../components/ContactFormProduct';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Hero from '../../components/HeroBackgroundImage';
import backgroundImage from '../../img/tablet-holding-portrait.jpg';
import norwayMap from '../../img/norway-domain.png';
import Button from '../../components/Button';

// style={{ backgroundImage: `url(${backgroundImage})` }}
export const OrderProduct = () => {
  return (
    <>
      <Layout>
        <Hero
          heading="BlueThink™ GO - Meld interesse"
          subheading="Neste generasjons kontrollrom er mobilt, meld din interesse
      allerede i dag."
          backgroundImage={backgroundImage}
          buttonPath="#meld-interesse"
          buttonText="Meld interesse"
        />
        <section id="domains" className="section has-dark-background">
          <div className="container">
            <div className="columns">
              <div className="column is-6">
                <figure className="image">
                  <img src={norwayMap} alt="Kart over Norge" />
                </figure>
              </div>
              <div className="column is-5 text">
                <h3>BlueThink™ GO med skreddersydd domene for din lokalitet</h3>
                <p className="medium-paragraph">
                  Vi har allerede kjøpt et skreddersydd domene til ditt anlegg
                  og over 1000 andre oppdrettsanlegg i Norge. Domenenavnet er
                  dermed enkelt å huske, slik at du kan logge deg inn når som
                  helst, fra hvor som helst.
                </p>
                <Button
                  className="is-transparent"
                  text="Se fullstendig domeneliste"
                  link="/bluethink-go/domener"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="meld-interesse" className="section has-dark-background">
          <div className="container">
            <div className="columns">
              <div className="column is-6 is-offset-3 has-text-centered">
                <Title
                  title="Meld interesse"
                  description="Meld din interesse og få tilsendt ytterligere informasjon om
                  tjenesten i tillegg til prisliste. Når skjemaet under er fylt
                  ut og sendt, vil du kontaktes innen kort tid."
                  position="center"
                />
                <ContactFormProduct
                  formName="bluethink-go"
                  action="/bluethink-go/takk"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default OrderProduct;
