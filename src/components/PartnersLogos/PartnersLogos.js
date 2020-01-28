import React from 'react';
import InnovasjonNorge from '../../img/Logos/innovasjon-norge.png';
import Forskningsradet from '../../img/Logos/forskningsradet.png';
import NorskAkkreditering from '../../img/Logos/Kiwa+NA_MSYS004_no.svg';
import iso9001 from '../../img/Logos/9001.svg';
import iso14001 from '../../img/Logos/14001.svg';
import azure from '../../img/Logos/azure.png';
import sintef from '../../img/Logos/sintef.svg';
import ntnu from '../../img/Logos/ntnu.svg';

const partners = [
  {
    img: InnovasjonNorge,
    alt: 'InnovasjonNorge',
    width: '100%',
    height: '3vh',
  },
  {
    img: Forskningsradet,
    alt: 'Forskningsradet',
    width: '100%',
    height: '1.5vh',
  },
  {
    img: NorskAkkreditering,
    alt: 'NorskAkkreditering',
    width: '100%',
    height: '3vh',
  },
  {
    img: azure,
    alt: 'Microsoft Azure',
    width: '100%',
    height: '4.5vh',
  },
  {
    img: sintef,
    alt: 'SINTEF',
    width: '100%',
    height: '97px',
  },
  {
    img: ntnu,
    alt: 'NTNU',
    width: '100%',
    height: '97px',
  },
  {
    img: iso9001,
    alt: 'iso9001',
    width: '100%',
    height: '5vh',
  },
  {
    img: iso14001,
    alt: 'iso9001',
    width: '100%',
    height: '5vh',
  },
];

const PartnersLogos = () => (
  <>
    <section id="partners" className="section">
      <div className="container">
        <div className="columns">
          {partners.map(partner => (
            <Logo
              key={partner.img}
              img={partner.img}
              width={partner.width}
              height={partner.height}
              alt={partner.alt}
            />
          ))}
        </div>
      </div>
    </section>
  </>
);

const Logo = ({ width, height, img, alt }) => (
  <div className="column" style={{ margin: 'auto' }}>
    <figure className="image">
      <img alt={alt} src={img} style={{ width, height, margin: 'auto' }} />
    </figure>
  </div>
);

export default PartnersLogos;
