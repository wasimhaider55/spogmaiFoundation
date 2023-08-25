import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "../../../card/VideoCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const OrphanFamilySupport = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <main className=" pt-20">
      {/*orphan family support section open */}
      <div className=' relative w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
        <div className=" absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className=" absolute text-white text-4xl font-bold  pt-20 md:pl-20 pl-10 ">
          <h1 className=" capitalize">Orphan Familie's Support </h1>
          <div className=" w-24 h-1 bg-red-500 rounded-full mt-3 "></div>
        </div>
      </div>
      {/* orphan family support section Closed */}

      {/* Overview section Open */}
      <div className='lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20 pl-4'>
        <h1>Overview</h1>
        <div className=' w-20 h-1 bg-blue-600 rounded-full mt-3 '></div>
      </div>

      <div className='py-10 pr-4  lg:pr-16 pl-4 md:pl-20 lg:pl-24 text-justify text-gray-500'>
        <p>
          <strong className=" font-semibold">  Orphan Family Support Nurturing Hope and Providing Strength </strong>
          The Spogmai Foundation's aim focuses on building hope and offering support to orphaned families.
          We recognize the particular problems that orphaned children and their families experience,
          and our Orphan Family Support program is committed to making a long-term positive difference
          in their lives.
        </p>
        <p className=" mt-2">
          We believe every child, regardless of what they face, needs a stable and caring environment in which to thrive.
          Our Orphan Family Support program provides a comprehensive strategy that includes emotional, educational, and
          financial assistance, with the goal of providing a solid foundation for these families to build on.
        </p>
        <p className="mt-2">
          Prophet Muhammad PBUH said:
          <strong className="font-semibold">
            "I and the person who looks after an orphan and provides for him,
            will be in Paradise like this,
          </strong>
          putting his index and middle fingers together." ~ Sahi Bukhari
        </p>
        <p className="my-2">
          Spogmai Charity Foundation cordially invites you to join us on this transforming journey.
          By contributing to our Orphan Family Support program, you become an inspiration of hope
          for these families, assisting them in rebuilding their lives and embracing a bright future.
        </p>
        <strong>Let us work together to uplift, empower, and motivate orphaned families toward a brighter future.</strong>
      </div>
      {/* Overview section Closed */}

      {/* orphan family support section components open */}
      <section className="bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-black">
        <div className=" lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20 pl-4 capitalize">
          <h1>Orphan Familie's Support</h1>
          <div className=" w-16 h-1 bg-blue-600 rounded-full mt-3 "></div>
        </div>

        <div className="lg:flex lg:pl-24  pt-10 mb-24 px-4 md:px-20  gap-6">
          <div className="lg:w-[50%]">
            <p className=" pl-1 pb-4 lg:pr-24 md:pr-24 sm:pr-24 text-justify ">
              SPOGMAI Foundation is currently sponsoring several orphan families
              in Hangu and connected regions, and is financially supporting them
              to cover their daily living expenses. Through this program,
              vulnerable orphans and their families receive a regular monthly
              allowance in between Rs.10,000 to Rs.20,000 depending upon family
              needs and number of family members, which enables them to cover
              their food, clothes, education and other daily living expenses.
              Apart from regular monthly allowance in the shape of cash, SPOGMAI
              Foundation also distributes Monthly Ration Packages in orphan
              families so that they can have enough food available in their
              houses. In addition to the above, clothes are also distributed in
              those families on different occasions, including Eid. Also with
              the arrival of winter season, warm clothes are distributed in
              them.
            </p>
          </div>

          <div className="lg:w-[50%] pb-5">
            <img
              src="https://images.squarespace-cdn.com/content/v1/577eab6d03596e5318b18a43/1599066636360-H7Y593575V2IJG569ITW/Orphans.png"
              alt="who we are "
            />
          </div>
        </div>
        <Carousel responsive={responsive} className=" lg:mx-20 text-white">
          <VideoCard
            link="https://www.youtube.com/embed/KcMlMPsy7fU"
            title="Spogami Foundation Distribute Monthly Ration packages"
          />
          <VideoCard
            link="https://www.youtube.com/embed/oYg7m3__FOc"
            title="Monthly Ration Distribution Spogmai Foundation with Tahir Fida"
          />
          <VideoCard
            link="https://www.youtube.com/embed/cbBR0t5cmB0"
            title="Ration Packages Distributionm the founder of Spogmai foundation"
          />
          <VideoCard
            link="https://www.youtube.com/embed/KcMlMPsy7fU"
            title="Monthly Ration Packages Distribution in Hangu District"
          />
        </Carousel>
      </section>
      {/* orphan family support section components Closed */}

      {/* Help us Section open */}
      <Link to="/donateNow">
        <div className="md:flex md:justify-around md:items-center py-10 my-5 px-14 h-56 bg-blue-400 ">
          <h1 className="text-white font-bold sm:text-3xl text-2xl">
            Help Us So We Can help many more orphans families
          </h1>
          <button className=" border-2 border-white rounded-2xl p-3 ml-24 sm:ml-40 md:mt-0 mt-10 text-white font-bold hover:bg-blue-500">
            Donate Now{" "}
          </button>
        </div>
      </Link>
      {/* Help us Section closed */}
    </main>
  );
};

export default OrphanFamilySupport;
