import React from "react";
// import Stats from "./components/stats";
import StatsAbout from "./components/stats_aboutus";
export default function AboutUs() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Header/> */}

      <div className="bg-repeat-x bg-center  bg-white pt-20">
        {/* *****************  Remote accounting  ==> 1 **************** */}
        <div
          className="grid grid-cols-1 sm:grid-cols-1 py-16 xl:grid-cols-3 lg:flex "
          style={{ background: "#efe0c3" }}
        >
          <div className="md:hidden lg:inline-block  lg:pl-36">
            <img
              className=" w-[10rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://images.ctfassets.net/88a6qmzs2wdz/6o1A25XqFyywCwQKSsgGYw/13b6b935c32b48eacda0b036389510bd/Bench-Bookkeeping_About-L_copy.png?h=383&q=90&w=270"
              alt="App screenshot"
              style={{ height: "380px", width: "270px" }}
            />
          </div>
          <div className="text-center lg:px-10 text-black lg:max-w-4xl lg:mx-auto pt-36">
          
            <h1 className="PatuaOne tracking-wider text-3xl lg:text-4xl lg:leading-10 p-8  font-medium text_color1">
            Accounting And Bookkeeping Services
              </h1>
          </div>

          <div className="w-full hidden md:inline-block  lg:hidden lg:w-7/12 ">
            <img
              className="w-full h-full"
              src="https://images.ctfassets.net/88a6qmzs2wdz/5ABL535tpCkwako2cuOSyO/70646f1e217199c9f88c20e71be459da/Yellow-Hero-Mobile.jpg?h=453&q=90&w=740"
              alt="A group of People"
            />
          </div>
          <div className="md:hidden lg:inline-block mx-auto lg:pr-36">
            <img
              className=" w-[10rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://images.ctfassets.net/88a6qmzs2wdz/2xxROPFW36wUaSi8Ys6ym6/af4d19ad1363fe7a97231e83bad92118/Bench-Bookkeeping_About-R.png?h=376&q=90&w=270"
              alt="App screenshot"
              style={{ height: "380px", width: "270px" }}
            />
          </div>
        </div>
        {/* ***************** Quick financial ==> 2 **************** */}
        <div className=" items-center justify-center h-auto  bg-fixed bg-center bg-cover ">
          <div class="flex py-20" style={{ background: "#f6f6f6" }}>
            <div className="w-full lg:w-1/2 text-center mx-auto">
              {/* mx-auto lg:flex-auto w-1/2 lg:py-20 text-center */}
              <h1 className="PatuaOne tracking-wider text-xl lg:text-3xl lg:leading-10 p-8  font-medium text_color1">
                Quick financial reports , dedicated experts to help you with
                your books , when you need
              </h1>
              <p className="catamaran mt-8 font-normal text-lg lg:text-2xl px-14 leading-9 text_color2">
                Get everything done and ready at your table starting from
                financial books to important business reports by our accounting
                experts
              </p>
            </div>
          </div>
        </div>

        {/* ***************** Why Bookxpert ==> 3 **************** */}
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            <div className="heading w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className=" PatuaOne tracking-wider text-xl lg:text-2xl lg:text-left text-center font-medium py-5 leading-9 text-gray-800 ">
                {" "}
                Why Bookxpert ?
              </h1>
              <p className="catamaran font-normal text-base lg:mr-20 text-center lg:text-left md:text-left  ">
                {" "}
                We are in a constant process of providing early and updated
                financials to small businesses and Auditors . Taking in mind how
                important it is for businesses to monitor their cash flow and
                make decisions, we have experts who validate , prepare and send
                books to them on a monthly basis. In case of Auditors we provide
                them accurate financials & supporting documents needed for
                attestation and audits.
              </p>
            </div>

            <div className="lg:w-5/12">
              <img
                className="h-full md:mx-auto md:inline md:w-full"
                src="https://images.ctfassets.net/88a6qmzs2wdz/3Uyb7jbHK8oS8EYImEOOuc/5b18cab4fb3bbfb75e002f72ae70c72a/Robson_Office_8447_1600px.jpg?h=380&q=90&w=570"
              />
            </div>
          </div>
        </div>

        {/* ***************** statistics ==> 4 **************** */}
        <StatsAbout />
        {/* ***************** How We Got Here ==> 5 **************** */}
        <div className="flex  lg:flex-row flex-col justify-center md:py-12 md:px-6 gap-14 py-10  ">
          <div className=" lg:w-4/12  ">
            <img
              className="h-full md:mx-auto"
              src="https://images.ctfassets.net/88a6qmzs2wdz/1N6ndt2xLasq20cS8CWkSI/9ca649b656f8c2a0cf7c7372a6aeab4c/four-inside-one.jpg?h=888&q=70&w=1480"
              alt="A group of People"
            />
          </div>
          <div className="w-full lg:w-5/12 flex flex-col md:leading-5 px-5 justify-center">
            <h1 className=" PatuaOne tracking-wider text-xl lg:text-2xl lg:text-left font-medium py-5 leading-9 text-gray-800 ">
              {" "}
              A brief about our journey
            </h1>
            <p className="catamaran font-normal text-base lg:mr-20 lg:text-left">
              {" "}
              Since 2019, we have been transforming the way businesses think
              about accounting and bookkeeping. From the time of establishment,
              the focus has been to provide personalized and timely accounting
              services to small businesses and Auditors. Over the time period,
              working with diverse range of clients we have realized the
              different requirements that businesses have and are committed
              towards delivering comprehensive & customized accounting &
              bookkeeping services that meets all of their needs
            </p>
          </div>
        </div>
        <div>
          <div className="text-center">
            <div className="pb-20">
              <div className="text-center">
                <p className="catamaran font-normal text-sm px-10 text-left lg:text-center lg:w-5/12 mx-auto">
                  Started with an Aim of “Empowering SMEs & Assisting Auditors”,
                  We are a GOI Recognised Bootstrapped Startup based out of
                  Guntur providing Virtual Real-Time Accounting Services to 100s
                  of Clients from 25+ Types of Industries (3 States & 65+
                  Districts) with our 100+ Accounting, Technology & Management
                  related Experts, fulfilling Business Owners- Accounting +
                  compliances + MIS Requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ***************** Where Are We ==> 6 **************** */}

        <div
          className="lg:py-32 py-20 text-center mx-auto justify-center"
          style={{ background: "#f6f6f6" }}
        >
          <div className="text-center text-black">
            <h1 className="PatuaOne tracking-wider text-3xl lg:text-3xl font-medium sm:text-4xl md:text-xl">
              Where Are We{" "}
            </h1>

            <p className="catamaran my-3 text-base lg:text-xl lg:leading-8 lg:max-w-3xl lg:mx-auto text-black px-10 font-normal">
              Startup based out of Guntur, Branches In Hyderabad, Bengaluru and
              15+ Sub-Branches The our executives are all around Andhra Pradesh,
              Telangana, Karnataka.
            </p>

            <button className="my-5 py-2 px-3 hover:rounded-bl-2xl hover:rounded-tr-2xl bg-transparent hover:bg-blue-900 text-blue-900 font-medium text-base hover:text-white  border border-blue-900 hover:border-transparent rounded">
              Learn More
            </button>
          </div>
          <div className="lg:w-9/12 lg:mx-auto ">
            <img
              className="lg:w-full h-full w-10/12 mx-auto" 
              src="https://images.ctfassets.net/88a6qmzs2wdz/csiEOXNxluaWasqasQ0YA/d903bcd6b18e6aadcb6a4c9fdb0cac9b/Business-types.png?h=87&q=90&w=1170"
              alt="A group of People"
            />
          </div>
        </div>

        {/* ***************** Our Expertise  ==> 7 **************** */}
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-center gap-8 py-20">
            <div className="heading w-full text-xl lg:w-5/12 flex flex-col justify-center">
              <h1 className=" PatuaOne tracking-wider text-xl lg:text-3xl  font-medium py-5 leading-9 text-gray-800">
                {" "}
                Our Expertise
              </h1>
              <p className="catamaran font-normal text-base lg:mr-20  md:text-left  ">
                {" "}
                Our aim is to understand the needs of small businesses and
                Auditors and to help them keep their finances in order , conduct
                audits in a manner as smooth as possible , discarding any scope
                of rush & delays
              </p>
            </div>


            <div className="lg:w-5/12 text-base">
              <p>
                Financial mastery is the idea that everyone, regardless of
                economic standing, should have full control of their finances.
                It’s more than knowing how to read an account statement—it’s
                giving people the tools they need to stay on top of their
                finances, and improve their lives.
              </p>
              <p>
                <b className="pt-10">
                  People and the quality of their lives. That, at its core, is
                  what Bench is about.
                </b>
              </p>{" "}
            </div>
          </div>
          <div className="lg:w-11/12 mx-auto lg:h-80 ">
            <img
              className="h-full md:mx-auto md:inline md:w-full"
              src="https://images.ctfassets.net/88a6qmzs2wdz/6BQpvzry7e0CE2gq4oqkOS/5c166b1862f5df46da40064c8a1a2431/Bench-Accounting_Benchmates.jpg?h=437&q=90&w=1170"
            />
          </div>
        </div>

        {/* ***************** Our principles ==> 5**************** */}

        <div className=" text-center mx-auto justify-center">
          <div className="text-center text-black">
            <h1 className="PatuaOne tracking-wider text-xl lg:text-3xl font-medium sm:text-4xl md:text-xl">
              Our principles{" "}
            </h1>

            <p className="catamaran my-3  text-base lg:max-w-3xl lg:mx-auto text-black px-10 font-normal">
              We feel delight in helping businesses reach their financial goals
              in accordance with latest trends and regulations by delivering
              regular accounting and bookkeeping services
            </p>
            <p className="catamaran my-3 leading-normal text-base lg:max-w-3xl lg:mx-auto text-black px-10 font-normal">
              We help small businesses fill in the gap in their finances caused
              by irregular and last minute accounting leading to inaccurate
              financial books . Our daily accounting services lets them track
              their cash flow , manage their operations with ease and make
              relevant business decisions{" "}
            </p>

            <button className="my-5 py-2 px-3 hover:rounded-bl-2xl hover:rounded-tr-2xl bg-transparent hover:bg-blue-900 text-blue-900 font-medium text-base hover:text-white  border border-blue-900 hover:border-transparent rounded">
              See How BookXpert Works
            </button>
          </div>
        </div>

        {/* _________________________________________ */}
        <div
          className="max-w-none pt-10 items-center justify-center h-auto bg-white bg-fixed bg-center bg-cover "
          style={{ background: "#f6f6f6" }}
        >
          <div>
            <h1 className="PatuaOne tracking-wider  lg:text-3xl md:text-xl text-center font-medium text-lg  lg:p-8 p-8 py-5">
              Upscale your business with our outstanding Accounting services{" "}
            </h1>

            <p className="catamaran text-center font-normal mx-auto lg:w-10/12 px-5 lg:max-w-2xl md:w-full md:px-16">
              We offer accounting services that are compliant with the latest
              laws and regulations. Get your business running with exclusive
              business reports , updated financial books , delivered by experts
              on a timely basis
            </p>
          </div>

          <div class="font-medium lg:w-4/5 md:w-2/5 md:mx-auto lg:mx-auto lg:p-10 p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
            <div class="dark:border-gray-700 dark:bg-gray-800 ">
              <div className="w-x h-x  lg:w-x2 lg:h-y2"></div>
              {/* <img class="w-full" src="" alt="Mountain"/> */}

              <div class="py-4">
                <div class="h-full md:h-auto  overflow-hidden">
                  <img
                    class="lg:h-48 h-auto w-full object-cover object-center"
                    src="https://images.ctfassets.net/88a6qmzs2wdz/37tbb4S14cSKQSgMOAwGye/39cd38419e7438f358c5aa0b32eb1136/Bench-Bookkeeping_Careers.jpg?h=206&q=90&w=330"
                    alt="blog"
                  />
                  <div class="p-6">
                    <h1 class="PatuaOne tracking-wider text_color text-center mx-auto text-md title-font font-medium text-gray-400 mb-1">
                      Careers
                    </h1>

                    {/* <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div class="md:flex-row md:max-w-xl ">
              <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
              {/* <img class="w-full" src="" alt="Mountain"/> */}

              <div class=" py-4">
                <div class="h-full overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://images.ctfassets.net/88a6qmzs2wdz/4CNjETsyhGUI8yyi6wwco4/0c75c524c7a8feca46f0164ed5e9451a/Bench-Bookkeeping_Press.jpg?h=206&q=90&w=330"
                    alt="blog"
                  />
                  <div class="p-6">
                    <h1 class=" PatuaOne tracking-wider text_color text-center mx-auto text-md title-font font-medium text-gray-400 mb-1">
                      Events
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div class="md:flex-row md:max-w-xl dark:bg-gray-800 ">
              <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
              {/* <img class="w-full" src="" alt="Mountain"/> */}

              <div class=" py-4">
                <div class="h-full  overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://images.ctfassets.net/88a6qmzs2wdz/ziZhJZ4FfEMyAkymAQCuw/9ba6c015cdc91881c97425e536959ed2/Bench-Bookkeeping_How-it-Works.jpg?h=206&q=90&w=330"
                    alt="blog"
                  />
                  <div class="p-6">
                    <h1 class=" PatuaOne tracking-wider text_color text-center mx-auto text-md title-font font-medium text-gray-400 mb-1">
                      Our Work
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
