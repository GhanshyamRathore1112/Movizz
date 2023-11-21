import React from 'react'
import "./styles.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from './trending/Trending';
import TopRated from './topRated/TopRated';
import Popular from './popular/Popular';
function Home() {
  return (
    <div>
      <HeroBanner/>
      <Trending/>
      <TopRated/>
      <Popular/>
    </div>
  )
}

export default Home
