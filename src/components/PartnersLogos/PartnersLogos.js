import React from 'react';
import InnovasjonNorge from '../../img/Logos/innovasjon-norge.png';
import Forskningsradet from '../../img/Logos/forskningsradet.png';
import Nce from '../../img/Logos/nce.png';
import NorskAkkreditering from '../../img/Logos/Kiwa+NA_MSYS004_no.svg';
import iso9001 from '../../img/Logos/9001.png';
import iso14001 from '../../img/Logos/14001.png';

const partners = [
  {
    img: InnovasjonNorge,
    alt: 'InnovasjonNorge',
    width: '150px',
    height: '50px',
  },
  {
    img: Forskningsradet,
    alt: 'Forskningsradet',
    width: '158px',
    height: '27px',
  },
  {
    img: Nce,
    alt: 'Nce',
    width: '246px',
    height: '40px',
  },
  {
    img: NorskAkkreditering,
    alt: 'NorskAkkreditering',
    width: '202px',
    height: '97px',
  },
  {
    img: iso9001,
    alt: 'iso9001',
    width: '82px',
    height: '85px',
  },
  {
    img: iso14001,
    alt: 'iso9001',
    width: '82px',
    height: '85px',
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
