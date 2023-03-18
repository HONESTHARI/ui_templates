import React from "react";

import Navbar from "./code-ref/spl_nav";
import Footer from "./code-ref/footer";

export default function Jobs() {
  return (
    <>
      <Navbar />

      <div className="pt-20">
        {/* ***************** SECTION ==> 1 **************** */}

        <div
          className="sm:flex sm:items-center text-center py-20"
          style={{ background: "#f6f6f6" }}
        >
          <div className="sm:flex-auto">
            <h1 className="text-3xl mb-10 font-bold text-gray-900">
              Bookkeeping Associate - Future Opportunities
            </h1>
            <a href="../Careers" className="pt-20 text-sm text-gray-700">
              ← All Job Openings
            </a>
          </div>
        </div>

        {/* ***************** SECTION ==> 2 **************** */}

        <div className=" pt-5 items-center justify-center h-auto  bg-fixed bg-center bg-cover bg-white ">
          <div className=" max-w-2xl mx-auto lg:flex-auto lg:py-10  px-10 rounded-lg  ">
            {/* About the job */}
            <div>
              <h2 className="text-3xl  font-bold tracking-tight">
                About the job
              </h2>
              <h3 className="mt-3">Job Description</h3>
              <p className="mt-3">
                Interested Candidates can Fill out this Form : us :
              </p>
              <p className="mt-5 text-1xl leading-8">
                We are a Government of India recognized Bootstrapped Startup in
                the field of Accounting with HQ in Guntur functioning with an
                ambitious plan of Pan-India expansion and an Aim of "Empowering
                SMEs, Assisting Auditors" by Fulfilling their Accounting +
                Compliance+ MIS Requirements. Within the Span of 2 Years from
                its inception, We were able to serve 500+ clients from 25+ types
                of industries spread across 3 states (AP, TS & Ka) & 65+
                districts with our 90+ Staff from Technology & Accounting
                Domains.
              </p>
            </div>

            {/* Roles & Responsibilities */}
            <div className="mt-10">
              <p className="font-semibold">Roles & Responsibilities</p>

              <ul class="space-y-4 mt-10 text-gray-800 list-disc list-inside dark:text-gray-400">
                <li>
                  {" "}
                  Research, Create, Design & Implement New Technology based
                  Applications which will Fulfill Organization's Aspirations as
                  well as the Customer's Requirements & Expectations.
                </li>
                <li>
                  Assess & Modify Existing Applications(if required) to Provide
                  user-friendly experience to customers.
                </li>
                <li>
                  Monitor KPIs and IT budgets to assess technological
                  performance parameters like Reliability, functionality,
                  efficiency, etc. from Customers' & Companies' Perspectives.
                  Make changes wherever necessary.
                </li>
                <li>Act as a Mentor to your Team & Guide to the Board.</li>
                <li>
                  Execute any other work required for the company from Time to
                  Time to ensure a smooth flow of overall functioning.
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <p className="font-semibold">Required Qualifications</p>

              <ul class="space-y-4 mt-10 text-gray-800 list-disc list-inside dark:text-gray-400">
                <li>Graduation from IITs/IIITs/NITs. </li>
                <li>
                  In-depth knowledge of web & mobile systems architecture,
                  design, and development.
                </li>
              </ul>
            </div>

            {/* Preferred Qualifications */}

            <div className="mt-10">
              <p className="font-semibold">Preferred Qualifications</p>

              <ul class="space-y-4 mt-10 text-gray-800 list-disc list-inside dark:text-gray-400">
                <li>
                  Exposure to MVC Architecture, ASP .NET Applications,
                  MSSQL/MySQL, jQuery, Mobile Applications (Android & IOS), and
                  advanced technologies.
                </li>
                <li>
                  Experience in Handling a Team of a Minimum of 10 Members.
                </li>
                <li>
                  Prior experience in co-founding startups/ working in
                  early-stage start-ups.
                </li>
              </ul>
            </div>

            {/* What We Offer */}
            <div className="mt-10">
              <p className="font-semibold">What We Offer</p>

              <ul class="space-y-4 mt-10 text-gray-800 list-disc list-inside dark:text-gray-400">
                <li>
                  Opportunity to Learn and Experiment with Futuristic
                  Technologies like AI, ML, IOT, OCR, etc to disrupt Accounting
                  Field with Novel Solutions.
                </li>
                <li>
                  Strong focus on a result-oriented but fun work culture that
                  values each one's uniqueness!
                </li>
              </ul>
            </div>
            <div className="my-10">
              {" "}
              <hr />
            </div>
            <div className="mt-10  items-center justify-center gap-x-6 lg:justify-start">
              <button class=" m-5 bg-white border-blue-800 text-blue-800  hover:bg-blue-800 font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded">
                <a href="http://bookxpert.co/"> Apply Now</a>
              </button>
            </div>
          </div>

          <div className="" style={{ background: "#e4efef" }}>
            <div className="max-w-2xl mx-auto lg:flex-auto lg:py-10  px-10 rounded-lg  ">
              {/* About the job */}
              <div className="text-center">
                <h2 className="text-3xl  font-bold tracking-tight">
                  Looking for something different?
                </h2>

                <p className="mt-3 mb-5">Take a look at what else is open.</p>
                <a href="../Careers" className="pt-10 text-sm text-gray-700">
                  ← All Job Openings
                </a>

                {/* <button class=" ml-20 mt-5 bg-white border-blue-800 text-blue-800  hover:bg-blue-800 font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded">
                  <a href="http://bookxpert.co/"> Set Alert</a>
                </button>
               */}
                {/* <button class=" m-5 ml-20  hover:bg-blue-800 text-blue-800  border-blue-800  font-semibold hover:text-     py-2 px-4 border hover:border-transparent rounded">
                  <a href="http://bookxpert.co/"> 
                  {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3  hover:text-white text-blue-800"
                      >
                        <item.icon
                          className="h-6 w-6 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium">
                          {item.name}
                        </span>
                      </a>
                    ))}</a>
                </button> */}
              </div>
            </div>
          </div>
        </div>

        {/* ***************** SECTION ==> 3 **************** */}
      </div>

      <Footer />
    </>
  );
}
