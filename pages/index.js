import React from "react";
import Stats from "./components/stats";
//import Accordion from "./components/accordion";
import AccordionBasic from "./components/code-ref/accordion";

const logos = [
  {
    name: "Transistor",
    url: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
  },
  {
    name: "Mirage",
    url: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
  },
  {
    name: "Tuple",
    url: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
  },
  {
    name: "Laravel",
    url: "https://tailwindui.com/img/logos/laravel-logo-gray-400.svg",
  },
  {
    name: "StaticKit",
    url: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
  },
  {
    name: "Workcation",
    url: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
  },
];

export default function Home() {
  return (
    <div className="pt-20 items-center justify-center h-auto bg-white  bg-fixed bg-center bg-cover ">
      {/* ***************** Ditch The ==> 1 **************** */}
      <div
        className="xl:container 2xl:mx-auto  py-24 lg:py-24 lg:px-20 md:py-20 md:px-6  px-4 text-white"
        style={{ background: "#062d60" }}
      >
        <div className="flex flex-col lg:flex-row justify-center px-8 ">
          <div className="w-full leading-10 lg:w-5/12 lg:ml-16 pb-16 lg:text-left  text-center ">
            <h1 className="PatuaOne tracking-wider pb-5 text-2xl lg:text-5xl md:text-2xl md:pb-5  md:max-w-xs lg:max-w-lg text-center  md:text-center lg:text-left md:mx-auto text-white font-medium lg:pb-8  ">
              {" "}
              Ditch the delays
              <br className="hidden lg:block md:hidden" /> with DIY accounting,
              <br className="hidden lg:block md:hidden" /> be compliance ready
            </h1>

            <p className="catamaran text-base font-normal  text-center lg:text-left   text-white">
              Do it yourself accounting can hamper with your finances. Let
              Bookxpert handle your accounting by delivering accurate and timely
              financials
            </p>
            <button className="my-5 p-0 hover:rounded-bl-2xl hover:rounded-tr-2xl px-3 bg-transparent items-center mx-auto text-white border  border-white hover:bg-white font-medium  hover:text-blue-800 hover:border-transparent rounded">
              Book A Free Consultation
            </button>
          </div>
          <div className="w-full lg:w-7/12 ">
            <img
              className="w-full h-full"
              src="https://images.ctfassets.net/88a6qmzs2wdz/7zBHsyElF4x3Bo0PzWs8NS/aaeae132c5cb261b07c7972d3a1fbdc6/20220113_HomePageVisualUpdates_Home_Desktop_Final.png?h=395&q=90&w=670"
              alt="A group of People"
            />
          </div>
        </div>
      </div>

      {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* <AccordionBasic /> */}
      {/* ***************** Hero Sections-Insightful ==> 6 **************** */}
      {/* <div id="accordionFlushExample">
  <div
    class="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
    <h2 class="mb-0" id="flush-headingOne">
      <button
        class="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-target="#flush-collapseOne"
        aria-expanded="false"
        aria-controls="flush-collapseOne">
        Accordion Item #1
        <span
          class="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id="flush-collapseOne"
      class="!visible border-0"
      data-te-collapse-item
      data-te-collapse-show
      aria-labelledby="flush-headingOne"
      data-te-parent="#accordionFlushExample">
      <div class="py-4 px-5">
        Placeholder content for this accordion, which is intended to
        demonstrate the
        <code>.accordion-flush</code> class. This is the first item's
        accordion body.
      </div>
    </div>
  </div>
  <div
    class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
    <h2 class="mb-0" id="flush-headingTwo">
      <button
        class="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-collapse-collapsed
        data-te-target="#flush-collapseTwo"
        aria-expanded="false"
        aria-controls="flush-collapseTwo">
        Accordion Item #2
        <span
          class="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id="flush-collapseTwo"
      class="!visible hidden border-0"
      data-te-collapse-item
      aria-labelledby="flush-headingTwo"
      data-te-parent="#accordionFlushExample">
      <div class="py-4 px-5">
        Placeholder content for this accordion, which is intended to
        demonstrate the
        <code>.accordion-flush</code> class. This is the second item's
        accordion body. Let's imagine this being filled with some actual
        content.
      </div>
    </div>
  </div>
  <div
    class="rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
    <h2 class="mb-0" id="flush-headingThree">
      <button
        class="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-collapse-collapsed
        data-te-target="#flush-collapseThree"
        aria-expanded="false"
        aria-controls="flush-collapseThree">
        Accordion Item #3
        <span
          class="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id="flush-collapseThree"
      class="!visible hidden"
      data-te-collapse-item
      aria-labelledby="flush-headingThree"
      data-te-parent="#accordionFlushExample">
      <div class="py-4 px-5">
        Placeholder content for this accordion, which is intended to
        demonstrate the
        <code>.accordion-flush</code> class. This is the third item's
        accordion body. Nothing more exciting happening here in terms of
        content, but just filling up the space to make it look, at least
        at first glance, a bit more representative of how this would look
        in a real-world application.
      </div>
    </div>
  </div>
</div> */}
      {/* ***************** Accurate Books ==> 2 **************** */}
      <div
        className="grid grid-cols-1 sm:grid-cols-1 py-16 xl:grid-cols-3 lg:flex "
        style={{ background: "#f7f8fa" }}
      >
        <div className="hidden lg:inline-block lg:pl-48">
          <img
            className=" w-[10rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="https://images.ctfassets.net/88a6qmzs2wdz/4xjVaP4TqAYoBt3WVduqwW/b8a800151f09ffec2e70abcd5d9a2bbb/Frame_14795.png?h=237&q=90&w=170"
            alt="App screenshot"
            width={1920}
            height={1080}
          />
        </div>
        <div className=" text-center lg:px-0 text-black lg:max-w-4xl lg:mx-auto">
          
        <button className="my-5 py-0 mb-10 px-10 bg-transparent text-blue-900 font-medium text-base border border-blue-900   rounded-2xl">
           LIMITED TIME OFFER
          </button>
          <h1 className="PatuaOne tracking-wider text-3xl lg:text-3xl lg:px-0 px-10 font-medium sm:text-4xl md:text-xl">
            Accurate Books, no fines to pay
          </h1>
          <p className="catamaran my-3 text-base lg:min-w-xl lg:mx-auto text-black lg:px-10  px-10 font-medium">
            Wipe out the stress around your compliances and manage your business
            easily with accurate financial reports from our expert Accounting
            team.
          </p>

          <button className="my-5 py-2 px-3 hover:rounded-bl-2xl hover:rounded-tr-2xl  bg-transparent hover:bg-blue-900 text-blue-900 font-medium text-base hover:text-white  border border-blue-900 hover:border-transparent rounded">
            Learn More
          </button>
        </div>
        <div className="mx-auto lg:pr-48">
          <img
            className=" w-[10rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="https://images.ctfassets.net/88a6qmzs2wdz/2P7hmuf49eigOK0WjNh0cr/776add60874a88d14370eb5a29342b32/Frame_14796.png?h=237&q=90&w=170"
            alt="App screenshot"
            width={1920}
            height={1080}
          />
        </div>
      </div>

      {/* ***************** Timely Accounting Review ==> 3 **************** */}
      <div className="max-w-none py-20 items-center justify-center h-auto  bg-white bg-fixed bg-center bg-cover ">
        <div>
          <h1 className="PatuaOne tracking-wider lg:max-w-5xl lg:mx-auto lg:text-3xl text-center font-medium lg:p-8 p-8 py-3">
            Timely Accounting Services for Small Businesses & Auditors
          </h1>
        </div>

        <div className=" font-medium lg:w-4/5 lg:mx-auto lg:p-10 p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
          <div className=" md:flex-col md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
            <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
            {/* <img className="w-full" src="" alt="Mountain"/> */}

            <div className=" py-4">
              <p className="catamaran text-base ">
                Why should small businesses consider outsourcing Accounting &
                Bookkeeping?
              </p>
              <p className=" catamaran text-xs flex">
                <img
                  className=" w-[5rem] max-w-none mt-5 rounded-full bg-white/5 ring-1 ring-white/10"
                  src="https://images.ctfassets.net/88a6qmzs2wdz/498EXiBd0rSp5S6OhQIrNO/bea6f40792bf6cd7fe9200c587419155/download.jpeg?h=86&q=90&w=86"
                  alt="App screenshot"
                  width={1920}
                  height={1080}
                />
                <b className="text-blue-400  ml-10 mr-0  mt-10">
                  ALBERT LAMONT
                </b>
                <span className="mt-10"> CEO, SWEATCAST</span>
              </p>
            </div>
          </div>

          <div className=" md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
            <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
            <div className=" py-4">
              <p className=" catamaran text-base">
                What's in Budget 2023's surprise tax package for small
                businesses?
              </p>
              <p className="catamaran text-xs flex">
                <img
                  className=" w-[5rem] max-w-none mt-5 rounded-full bg-white/5 ring-1 ring-white/10"
                  src="https://images.ctfassets.net/88a6qmzs2wdz/1DloogLwZhhbmtqxuhTcWw/df3fa64ee18890ab0aff70e1415bc09b/Testimonial_Dr-Bukky.png?h=86&q=90&w=86"
                  alt="App screenshot"
                  width={1920}
                  height={1080}
                />
                <b className="text-blue-400 ml-10 mr-0  mt-10">ALBERT LAMONT</b>
                <span className="mt-10"> CEO, SWEATCAST</span>
              </p>
            </div>
          </div>

          <div className=" md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
            <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
            {/* <img className="w-full" src="" alt="Mountain"/> */}

            <div className=" py-4">
              <p className="catamaran  text-base">
                When choosing an outsourcing firm to do their books, what
                factors should small businesses consider?
              </p>
              <p className="catamaran text-xs flex">
                <img
                  className=" w-[5rem] max-w-none mt-5 rounded-full bg-white/5 ring-1 ring-white/10"
                  src="https://images.ctfassets.net/88a6qmzs2wdz/2vmIkgyTJv3CwYkblL3Ilk/3928a03e7f6399d1048a025c70d97f26/Gina-Downey.jpeg?h=86&q=90&w=86"
                  alt="App screenshot"
                  width={1920}
                  height={1080}
                />

                <b className="text-blue-400 ml-10 mr-0  mt-10">ALBERT LAMONT</b>
                <span className="mt-10 "> CEO, SWEATCAST</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ***************** border ==> 4 **************** */}
      <div className="w-80 lg:w-3/4 md:w-4/5 mx-auto border border-gray-200 mb-10"></div>

      {/* ***************** What you get with Bookxpert. ==> 5**************** */}

      <div className=" text-center mx-auto justify-center">
        <div className="text-center text-black">
          <h1 className="PatuaOne tracking-wider text-3xl lg:text-3xl font-medium sm:text-4xl md:text-xl">
            What you get with Bookxpert.{" "}
          </h1>
          <img className="text-center mx-auto my-10" src="/Book.png" />
          <h3 className="PatuaOne lg:max-w-3xl lg:mx-auto tracking-wider text-3xl lg:text-3xl font-medium sm:text-4xl md:text-xl">
            Easy business management with tidy financials
          </h3>
          <p className="catamaran my-3 text-base lg:max-w-3xl lg:mx-auto text-black px-10 font-normal">
            Avoid setbacks in your business due to undone books. With
            Bookxpert’s remote accounting services you receive benefits like
            advanced financial reports, inventory reports to help you manage
            your business at fingertips
          </p>

          <button className="my-5 py-2 px-3 hover:rounded-bl-2xl hover:rounded-tr-2xl bg-transparent hover:bg-blue-900 text-blue-900 font-medium text-base hover:text-white  border border-blue-900 hover:border-transparent rounded">
            See How BookXpert Works
          </button>
        </div>
      </div>

      {/* ***************** Hero Sections-Insightful ==> 6 **************** */}
      <div className="flex  lg:flex-row flex-col-reverse justify-center md:py-12 md:px-6 gap-14 py-10  ">
        <div className=" lg:w-5/12">
          <img
            className="h-full md:mx-auto"
            src="https://images.ctfassets.net/88a6qmzs2wdz/6i5t90xcqiIUMW5oX5fqcP/b8452255e4ce062957732537a283fe8b/2023_Homepage_VP_ExpertSupport.png?h=354&q=90&w=570"
            alt="A group of People"
          />
        </div>
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className=" PatuaOne tracking-wider text-xl lg:text-4xl lg:text-left text-center font-medium py-5 leading-10 text-gray-800 ">
            {" "}
            Insightful Reports
          </h1>

          <p className=" catamaran px-10 lg:min-w- lg:px-0 font-normal text-base lg:mr-20 text-center lg:text-left">
            {" "}
            We provide the highest levels of convenience and support to small
            businesses and Auditors by delivering accurate monthly reports which
            assist them with cash flow management and facing faceless
            assessments and audits.
          </p>
          <button className="my-5 hover:rounded-bl-2xl hover:rounded-tr-2xl px-3 transition duration-150 ease-in-out py-2 mx-auto bg-transparent lg:ml-0  hover:bg-blue-900 text-blue-700 font-medium hover:text-white border border-blue-900 hover:border-transparent rounded">
            Learn More
          </button>
        </div>
      </div>

      {/* ***************** Hero Sections-Dedicated   ==> 7 **************** */}
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          <div className="heading w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className=" PatuaOne tracking-wider text-xl lg:text-4xl lg:text-left text-center font-medium py-5 leading-10 text-gray-800 ">
              {" "}
              Dedicated Support
            </h1>

            <p className="catamaran  text-base lg:mr-20 text-center lg:text-left">
              {" "}
              A dedicated account manager will handle all your accounting and
              bookkeeping needs. Initially, your assigned expert will collect
              and analyse all financial data, followed by expert verification
              and validation.
            </p>
            <button className="my-5 py-2 px-3 hover:rounded-bl-2xl hover:rounded-tr-2xl mx-auto bg-transparent lg:ml-0  hover:bg-blue-900 text-blue-700 font-medium hover:text-white  border border-blue-900 hover:border-transparent rounded">
              Learn More
            </button>
          </div>

          <div className=" lg:w-5/12">
            <img
              className="h-full md:mx-auto"
              src="https://images.ctfassets.net/88a6qmzs2wdz/60YZfXjE7UU0IqBarEgYK4/22461e400c9b393e8833046dd8fbeda6/2023_Homepage_VP_FinancialReporting.png?h=354&q=90&w=570"
              alt="A group of People"
            />
          </div>
        </div>
      </div>

      {/* ***************** Hero Sections- Smooth Compliances  ==> 8**************** */}
      <div className="flex  lg:flex-row flex-col-reverse justify-center md:py-12 md:px-6 gap-14 py-10  ">
        <div className=" lg:w-5/12 ">
          <img
            className="h-full md:mx-auto"
            src="https://images.ctfassets.net/88a6qmzs2wdz/6i5t90xcqiIUMW5oX5fqcP/b8452255e4ce062957732537a283fe8b/2023_Homepage_VP_ExpertSupport.png?h=354&q=90&w=570"
            alt="A group of People"
          />
        </div>
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className=" PatuaOne tracking-wider text-xl lg:text-4xl lg:text-left text-center font-medium py-5 leading-10 text-gray-800 ">
            {" "}
            Smooth Compliances
          </h1>

          <p className=" catamaran font-medium text-base lg:mr-20 lg:p-0 px-5 text-center lg:text-left ">
            {" "}
            We value your trust in our accounting and bookkeeping services.
            Therefore, we ensure your books are regularly updated so that you
            have all the records present with you at the time of filing your
            compliances
          </p>
          <button className="my-5 py-2 px-3 hover:rounded-bl-2xl hover:rounded-tr-2xl mx-auto bg-transparent lg:ml-0  hover:bg-blue-900 text-blue-700 font-medium hover:text-white  border border-blue-900 hover:border-transparent rounded">
            Learn More
          </button>
        </div>
      </div>

      {/* ***************** statistics ==>9 **************** */}
      <Stats />



      {/* ++++++++++++++++++++++++++++++++++++++++++++ */}

       {/* ***************** Accurate Books ==> 2 **************** */}
       <div
        className="grid grid-cols-1 sm:grid-cols-1 py-16 xl:grid-cols-3 lg:flex "
        style={{ background: "#f7f8fa" }}
      >
        <div className="hidden lg:inline-block lg:pl-48">
          <img
            className=" w-[10rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="https://images.ctfassets.net/88a6qmzs2wdz/1dLJZFfakIm6ze6ySJAzRS/19329d5a2f956af08c6ec75c15fdf218/TaxHub-Left.png?h=236&q=90&w=170"
            alt="App screenshot"
            width={1920}
            height={1080}
          />
        </div>
        <div className=" text-center lg:px-0 text-black lg:max-w-4xl lg:mx-auto">
          
     
          <h1 className="PatuaOne tracking-wider text-3xl lg:text-3xl lg:px-0 px-10 font-medium sm:text-4xl md:text-xl">
          Are you ready for tax season?
          </h1>
          <p className="catamaran my-3 text-base lg:min-w-xl lg:mx-auto text-black lg:px-10  px-10 font-medium">
          Get exclusive access to deadline reminders, free checklists and more in our Tax Resource Hub.
          </p>

          <button className="my-5 py-2 px-3 hover:rounded-bl-2xl hover:rounded-tr-2xl  bg-transparent hover:bg-blue-900 text-blue-900 font-medium text-base hover:text-white  border border-blue-900 hover:border-transparent rounded">
            Learn More
          </button>

          <p className="catamaran my-3 text-base lg:min-w-xl lg:mx-auto text-black lg:px-10  px-10 font-medium">
          If you're several years behind on business taxes, get caught up and filed with Bench Retro.          </p>
        </div>
        <div className="mx-auto lg:pr-48">
          <img
            className=" w-[10rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="https://images.ctfassets.net/88a6qmzs2wdz/6tia5roEXDz2daFkUPIFMt/524a4ce1da60bbe68330d41cea3f0f3f/TaxHub-Right.png?h=235&q=90&w=170"
            alt="App screenshot"
            width={1920}
            height={1080}
          />
        </div>
      </div>


      {/* ***************** Explore over ==> 10 **************** */}
      <div className="max-w-none mb-10 pt-10 items-center justify-center h-auto bg-white bg-fixed bg-center bg-cover ">
        <div>
          <h1 className="PatuaOne tracking-wider lg:text-3xl text-center font-medium text-lg  lg:p-8 p-8 py-5">
            Explore over 600 resources for managing small business finances
          </h1>
        </div>

        <div className=" font-medium lg:w-4/5 lg:mx-auto lg:p-10 p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
          <div className="w-3/4 mx-auto md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
            <div className=" py-4">
              <div className="h-full   overflow-hidden">
                <img
                  className="lg:h-48 md:hidden lg:block w-full object-cover object-center"
                  src="https://images.ctfassets.net/88a6qmzs2wdz/2v3J5YNdud9NcKqGroidGE/922b6535d87717d0e9579f959b39beb2/BenchBlog_TaxTips_17BigTaxDeductions.png?h=255&q=90&w=270"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h1>
                  <h1 className=" PatuaOne tracking-wider title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="catamaran text-base  mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-3/4 mx-auto md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
            <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
            <div className=" py-4">
              <div className="h-full   overflow-hidden">
                <img
                  className="lg:h-48 md:hidden lg:block w-full object-cover object-center"
                  src="https://images.ctfassets.net/88a6qmzs2wdz/2jaEUtWACoVyDdRGmWCLaN/6c5da6d1d352948f8378f2f9b145c177/BenchBlog_Top12Qs.png?h=255&q=90&w=270"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h1>
                  <h1 className="PatuaOne tracking-wider title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="catamaran text-base mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
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
                    {/* <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
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
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
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
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-3/4 mx-auto md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
            <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
            <div className=" py-4">
              <div className="h-full  overflow-hidden">
                <img
                  className="lg:h-48 md:hidden lg:block w-full object-cover object-center"
                  src="https://images.ctfassets.net/88a6qmzs2wdz/7Eu1demGJF7dvPI3H67Fv3/05d650cb773d41c921c1313657aca20a/BenchBlog_TaxTips_10Steps.png?h=255&q=90&w=270"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h1>
                  <h1 className="PatuaOne tracking-wider title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="catamaran text-base mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ***************** Accordion ==> 11 **************** */}
      {/* <Accordion/> */}

      {/* ***************** With A Wide ==> 12 **************** */}
      <div
        className="grid grid-cols-1 sm:grid-cols-1 lg:flex xl:grid-cols-3 items-center justify-center"
        style={{ background: "#062d60" }}
      >
        <div className="hidden  lg:inline-block lg:pl-52">
          <img
            className="w-[10rem] max-w-none rounded-md"
            src="https://images.ctfassets.net/88a6qmzs2wdz/2e2TsIsGLaRNV65XbCPjNo/38bdefa478997663bad0f94e1be40529/Artboard_Copy.png?h=345&q=90&w=170"
            alt="App screenshot"
            width={1920}
            height={1080}
          />
        </div>

        <div className="text-center lg:px-24 lg:py-10 py-10 lg:pt-24 lg:max-w-4xl md:px-5 lg:mx-auto">
          <h1 className="PatuaOne tracking-wider lg:px-0 lg:mx-auto text-xl text-white lg:text-3xl font-medium sm:text-4xl md:text-xl ">
            Join Bookxpert and enjoy seamless Accounting services
          </h1>
          <p className=" catamaran my-3 text-base text-white px-10 lg:px-0 font-medium">
            Don’t let incomplete books ruin your finances. Our accounting &
            bookkeeping services ensure that you are one step ahead of your
            competitors and compliance ready with updated financials
          </p>

          <button className="my-5 py-2 hover:rounded-bl-2xl hover:rounded-tr-2xl px-3 bg-transparent items-center mx-auto text-white border  border-white hover:bg-white font-medium hover:text-blue-800 hover:border-transparent rounded">
            Book A Demo
          </button>
        </div>

        <div className="hidden lg:block lg:pr-52">
          <img
            className=" w-[10rem] max-w-none rounded-md"
            src="https://images.ctfassets.net/88a6qmzs2wdz/5BGb5uU22ZJAh7y63UZDvH/4109e19e0f4ba46d442ff27ed5c8fa2f/Artboard.png?h=345&q=90&w=170"
            alt="App screenshot"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
}
