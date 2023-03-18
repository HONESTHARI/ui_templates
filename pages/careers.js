import React from "react";
// import Navbar from './navbar'
// import Navbar from "./code-ref/spl_nav";
import Tables from "./components/table";
// import Footer from "./code-ref/footer";
// import Sub_careers from './code-ref/sub_careers';

export default function Careers() {
  return (
    <>
      {/* <Navbar /> */}

      {/* ***************** SECTION ==> 1 **************** */}

      <div className=" pt-10 lg:pt-0 items-center justify-center h-auto">
        <div className="flex text-black bg-white pt-5">
          <div className=" max-w-xl mx-auto lg:flex-auto lg:py-10 md:pt-10 text-center ">
            <h1 className="PatuaOne tracking-wider text-xl lg:mt-20 lg:text-3xl  font-medium pt-10">
              Do your life’s work
            </h1>
            <div>
            {/* <p className="catamaran font-catamaran text-base px-5 lg:mr-20 text-center  ">
             </p> */}
              <p className="catamaran text-center mt-6 px-8 text-1xl">
                We’re more than a bookkeeping company. We’re here to
                fundamentally change how business owners work, grow, and live
                their lives. The contributions from the people who work here is
                the only way we’ll get there. So, ready to get to it?{" "}
              </p>
            </div>
            <div className="mt-5  items-center justify-center gap-x-6 lg:justify-start">
              <button className=" m-5 bg-blue-800  hover:bg-white hover:border-blue-800 text-white font-semibold hover:text-blue-500 py-2 px-4 border border-white hover:border-transparent rounded">
                <a href="http://bookxpert.co/"> Book A Demo</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ***************** SECTION ==> 2 **************** */}
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-white">
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            {/* <h1 className="PatuaOne tracking-wider text-xl  lg:text-2xl lg:text-left text-center font-medium leading-9 text-gray-800  ">
              {" "}
              Take charge of your career
            </h1> */}

            <h1 className=" PatuaOne tracking-wider text-xl lg:text-2xl lg:text-left text-center font-medium py-5 leading-9 text-gray-800 ">
            {" "}
            Take charge of your career
          </h1>   
            <p className="catamaran font-normal text-base lg:mr-20 text-center lg:text-left text-gray-600  ">
              {" "}
              We never tell people what to do or what to think. Autonomy and
                radical responsibility are non-optional conditions for working
                at Bench. Uncover how your job can help us change lives, show us
                how it’s done, and take charge of your career.
            </p>
           
          </div>

          <div className=" lg:w-5/12 ">
            <img
              className="h-full md:mx-auto"
              src="https://images.ctfassets.net/88a6qmzs2wdz/47CpLq0rCSHCfNWjNMOPxX/6410f63691c0a2643e3d1106a8181b08/IMG_3097.jpg?h=380&q=90&w=570"
              alt="A group of People"
            />
          </div>
         
        </div>
      </div>


     
   {/* ***************** SECTION ==> 3 **************** */}
   <div className="2xl:container 2xl:mx-auto lg:py-16  lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-white">
   <div className="flex  lg:flex-row flex-col-reverse justify-center md:py-12 md:px-6 gap-14 py-10  ">
         
        <div className=" lg:w-5/12">
            <img
              className="h-full md:mx-auto"
              src="https://images.ctfassets.net/88a6qmzs2wdz/3sfxoWWb0zvUxMplt9c1DV/99e579ae0b645f3ee8e19e207f06b559/PeopleTeam_6736_1600px_Copy.jpg?h=380&q=90&w=570"
              alt="A group of People"
            />
          </div>
         
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className=" PatuaOne tracking-wider text-xl lg:text-2xl lg:text-left text-center font-medium py-5 leading-9 text-gray-800 ">
            {" "}
            Do what’s never been done
          </h1>  
           
           
            {/* <h1 className="PatuaOne tracking-wider text-xl lg:text-2xl lg:text-left text-center font-medium leading-9 text-gray-800  ">
              {" "}
              Do what’s never been done
            </h1> */}

            <p className="catamaran text-base lg:mr-20 text-center lg:text-left text-gray-600  ">
              {" "}
              We’re here to change the outcome of small businesses everywhere—for the better. That means you won’t just collect a pay cheque while working here. You’ll do something that’s never been done before (and improve lives in the process).
            </p>
           
          </div>
        </div>
      </div>


      {/* ***************** SECTION ==>5 **************** */}
      <Tables />

      <div className="w-80 lg:w-3/4 md:w-3/4 mx-auto border border-gray-200"></div>

      {/* <Sub_careers/> */}

      {/* ***************** SECTION ==>6 **************** */}
      {/* <Footer /> */}
    </>
  );
}
