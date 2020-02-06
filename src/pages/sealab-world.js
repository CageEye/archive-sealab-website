import React from 'react';
import Layout from '../components/Layout';
import Livestream from '../components/Livestream';

const World = () => (
  <Layout>
    <section className="section is-medium blog-content">
      <div className="container content">
        <h1>SEALAB WORLD</h1>
        <Livestream />
      </div>
    </section>
  </Layout>
);

export default World;
