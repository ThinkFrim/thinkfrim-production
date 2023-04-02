import React from 'react'
import Footer from '../../components/footer';
import Banner from '../../sections/banner';
import LatestWork from '../../sections/latestWork';
import Services from '../../sections/services';
import Team from '../../sections/team';

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <LatestWork />
      <Team />
      <Footer />
    </>
  )
}

export default Home;