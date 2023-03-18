//import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import Jobs from "./jobs";
const people = [
  {
    name: "Bookxpert-Technical Manager",
    title: "Guntur, Hyderabad, Bangalore",
    role: "Technical Manager",
    link:"./Jobs",
  },
  // More people...

  
];

export default function Tables() {
  return (
    <div className="bg-white pt-20">
    <div className="max-w-2xl mx-auto px-6 py-10 lg:px-8">
      <div className="sm:flex sm:items-center text-center">
        <div className="sm:flex-auto">
          <h1 className="PatuaOne tracking-wider text-3xl md:text-xl font-semibold text-gray-900">
            Let’s do big things
          </h1>
          <p className=" catamaran font-medium mt-2 text-sm text-gray-700">
            Whatever you do, wherever you’re at, we want to talk with you.
          </p>
        </div>
        {/* <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div> */}
      </div>
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-6 overflow-x-auto lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="PatuaOne font-medium py-3.5 pl-6 pr-3 text-left text-sm  text-gray-900 sm:pl-0"> 
                    POSITION
                      <span  href="./code-ref/sub_careers"className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                        {/* <ChevronDownIcon className="h-5 w-5" aria-hidden="true" /> */}
                      </span>
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" >
                    <p href="#" className="catamaran group inline-flex">
                      LOCATION
                      </p>
                  </th>
                  <th scope="col"  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" >
                    <span href="#" className="group inline-flex">
                      TEAM
                      <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                      </span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td  className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      <a href={person.link}>
                      {person.name}
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.title}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
