// Our Team Components is render belwo
import OurTeam from './OurTeam';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const AboutUs = () => {
    const location = useLocation();

    useEffect(() => {
        console.log(location)
        console.log(window.innerWidth)
        let WINDOW_WIDTH = window.innerWidth;
        let scroollY = 0;
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
        // eslint-disable-next-line eqeqeq
        if (location.hash == "#whoWeAre") {
            window.scrollTo(50, 250);
        }
        // eslint-disable-next-line eqeqeq
        if (location.hash == "#whatWeDo") {
            // const ScrollY = WINDOW_WIDTH >= 1390 ? 
            if (WINDOW_WIDTH >= 1390)
                scroollY = 1390;
            else if (WINDOW_WIDTH < 1350 && WINDOW_WIDTH >= 800) {
                // eslint-disable-next-line no-unused-vars
                scroollY = 2070;
            }
            else if (WINDOW_WIDTH < 800 && WINDOW_WIDTH > 100) {
                scroollY = 2300;
            }
            else {
                scroollY = 1470;
            }
            window.scrollTo(50, scroollY);
        }

        if (location.hash === "#ourTeam") {
            // const ScrollY = WINDOW_WIDTH >= 1390 ? 
            if (WINDOW_WIDTH >= 1390)
                scroollY = 1390;
            else if (WINDOW_WIDTH < 1350 && WINDOW_WIDTH >= 800) {
                // eslint-disable-next-line no-unused-vars
                scroollY = 2900;
            }
            else if (WINDOW_WIDTH < 800 && WINDOW_WIDTH > 100) {
                scroollY = 3290;
            }
            else {
                scroollY = 2100;
            }
            window.scrollTo(50, scroollY);
        }

    }, [location]);

    // jsx section

    return (

        <main className='pt-20'>
            {/* About Us section open */}
            <div className='relative w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
                <div className='absolute inset-0 bg-gray-900 opacity-60'></div> {/* Light black overlay */}
                <div className='absolute text-white text-4xl font-bold pt-20 md:pl-20 pl-10'>
                    <h1 className=''> About Us </h1>
                    <div className='w-24 h-1 bg-red-500 rounded-full mt-3'></div>
                </div>
            </div>






            {/* About Us section Closed */}


            {/* who we are section Open */}
            <div className=' lg:text-4xl text-3xl font-bold pt-24 lg:pl-24 md:pl-20 pl-4 uppercase' id="whoWeAre">
                <h1>Who WE Are</h1>
                <div className=' w-20 h-1 bg-blue-600 rounded-full mt-3 '></div>
            </div>

            <div className='lg:flex lg:pl-24  pt-10 mb-24 px-4 md:px-10  gap-6'>

                <div className="lg:w-[50%]">
                    <p className=' pl-1 pb-4 lg:pr-2 md:pr-2 sm:pr-2 text-justify '>
                        Spogmai Foundation is a well-known and successful non-profit, non-governmental, and non-political charity Hangu organization. Since 2015, the Spogmai Foundation has been working to give Timely Aid and Relief Support (Spogmai) to the poor people of Hangu District.
                        <br />
                        Founded by a local patron, Tahir Fada, and later joined by other volunteers motivated to make a difference, the foundation has now benefited thousands of families and many other individuals in a variety of ways.
                        <br />
                        Our charitable organization is committed to delivering safe and clean monthly rations, free food distribution, orphan support, and other services to communities throughout the Hangu area. We think that poor and needy family help is a basic human right and that every person deserves access to it.
                        <br />
                        We welcome you to visit our charity page and see the touching stories of transformation that our efforts have facilitated. Each success story is supported by a network of committed individuals who think that positive change is not just a possibility, but also a responsibility.
                        <br />
                        Thank you for visiting the Charity Page of the Spogmai Foundation. Your being here attests to the goodness that lives within all of us. Let us collaborate to build a brighter, more fair future for the communities we serve.
                    </p>
                </div>

                <div className='lg:w-[50%] sm:pt-14 sm:pl-10 '>
                    <img src="https://love.lambeth.gov.uk/wp-content/uploads/2020/05/hubs-2-500-x-320.jpg" alt="who we are " />
                </div>

            </div>
            {/* who we are section closed */}


            {/* Our history section Open */}
            <section className='bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-black'>

                <div className=' lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20 pl-4 uppercase'>
                    <h1>Our History</h1>
                    <div className=' w-16 h-1 bg-blue-600 rounded-full mt-3 '></div>
                </div>

                <div className='lg:flex lg:pl-24  pt-10 mb-24 px-4 md:px-20  gap-6'>

                    <div className="lg:w-[50%]">
                        <p className=' pl-1 pb-4 lg:pr-24 md:pr-24 sm:pr-24 text-justify '>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum,
                        </p>
                    </div>

                    <div className='lg:w-[50%] pb-5'>
                        <img src="https://love.lambeth.gov.uk/wp-content/uploads/2020/05/hubs-2-500-x-320.jpg" alt="who we are " />
                    </div>

                </div>
            </section>
            {/* Our history section Closed */}


            {/* what we Do section  */}

            <section >
                <div id="whatWeDo" className=' lg:text-4xl text-3xl font-bold pt-4 lg:pl-24 md:pl-20 pl-4 uppercase'>
                    <h1>What We Do</h1>
                    <div className=' w-20 h-1 bg-blue-600 rounded-full mt-3 '></div>
                </div>
                <div className='lg:flex lg:pl-24  pt-10 mb-24 px-4 md:px-20  gap-6'>
                    <div className="lg:w-[50%]">
                        <p className=' pl-1 pb-4 lg:pr-24 md:pr-24 sm:pr-24 text-justify '>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aliquid ipsa totam dolore quam, eligendi distinctio consectetur voluptatibus maxime? Expedita eaque, nulla ipsa et blanditiis alias tenetur nemo repellat voluptas!
                            Lorem ipsum,
                        </p>
                    </div>

                    <div className='lg:w-[50%]'>
                        <img src="https://love.lambeth.gov.uk/wp-content/uploads/2020/05/hubs-2-500-x-320.jpg" alt="who we are " />
                    </div>
                </div>
            </section>
            {/* what we Do section Closed */}

            <OurTeam />
        </main>



    )
}

export default AboutUs