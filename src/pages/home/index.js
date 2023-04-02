import React from 'react'
import ContactCard from '../../components/contactcard';
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
      <ContactCard />
      <Footer />
    </>
  )
}

export default Home;