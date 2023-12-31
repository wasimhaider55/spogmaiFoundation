import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Home,
  ContactUs,
  Navbar,
  AboutUs,
  OurActivities,
  DisabledPeopleSupport,
  FreeRationDis,
  OrphanFamilySupport,
  PoorFamilySupport,
  Education,
  Gallery,
  PictureGallery,
  VideoGallery,
  FRDAlbum,
  OFSAlbum,
  PFSAlbum,
  DPSAlbum,
  ESAlbum,
  Footer,
  ScrollToTop,
  DonateNow,
  DonateFood,
  DonateMoney,
  SignIn,
  SignUp,
} from "./components";

import Messages from "./components/sideBar/contactMessage/Messages";
import Message from "./components/sideBar/contactMessage/Message";
import FoodMessages from "./components/sideBar/foodMessage/FoodMssgs";
import FoodMessage from "./components/sideBar/foodMessage/FoodMssg";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/foodMessages" exact element={<FoodMessages />} />
        <Route path="/foodMessage/:id" exact element={<FoodMessage />} />
        <Route path="/messages" exact element={<Messages />} />
        <Route path="/message/:id" exact element={<Message />} />

        <Route element={<Navbar />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/aboutus" exact element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="/OurActivities" exact element={<OurActivities />} />
          <Route
            path="/ourcauses/orphanfamilysupport"
            exact
            element={<OrphanFamilySupport />}
          />
          <Route
            path="/ourcauses/freerationdistribution"
            exact
            element={<FreeRationDis />}
          />
          <Route
            path="/ourcauses/poorfamilysupport"
            exact
            element={<PoorFamilySupport />}
          />
          <Route
            path="/ourcauses/disablepeoplesupport"
            exact
            element={<DisabledPeopleSupport />}
          />
          <Route
            path="/ourcauses/educationsupport"
            exact
            element={<Education />}
          />
          {/* Gallery Components Routing */}
          <Route path="/gallery" exact element={<Gallery />} />
          <Route
            path="/gallery/picturegallery"
            exact
            element={<PictureGallery />}
          />
          <Route
            path="/gallery/videogallery"
            exact
            element={<VideoGallery />}
          />
          <Route
            path="/gallery/freerationdistribution"
            exact
            element={<FRDAlbum />}
          />
          <Route
            path="/gallery/orphanfamilysupport"
            exact
            element={<OFSAlbum />}
          />
          <Route
            path="/gallery/poorfamilysupport"
            exact
            element={<PFSAlbum />}
          />
          <Route
            path="/gallery/disablepeopleusupport"
            exact
            element={<DPSAlbum />}
          />
          <Route path="/gallery/educationsupport" exact element={<ESAlbum />} />
          {/* Gallery components Rounting end */}

          {/* Donate Now  */}
          <Route path="/DonateNow" exact element={<DonateNow />} />
          <Route path="/DonateFood" exact element={<DonateFood />} />
          <Route path="/DonateMoney" exact element={<DonateMoney />} />
        </Route>
        {/* Donate Now End */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
