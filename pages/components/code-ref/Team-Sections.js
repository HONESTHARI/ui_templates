const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
  ]
  
  export default function Team() {
    return (
      <div className="bg-white py-24 sm:py-32 w-full">
        <div className="mx-auto grid gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
          {/* <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div> */}


          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">


          {people.map((person) => (
              <li>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

                  <div>
                    <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Payments</h3>
                    {/* <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p> */}
                  </div>
                </div>
              </li>

              
            ))}

            
{people.map((person) => (
              <li>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Help (or) Chart With Us</h3>
                    {/* <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p> */}
                  </div>
                </div>
              </li>

              
            ))}


{people.map((person) => (
              <li>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Delivery Status</h3>
                    {/* <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p> */}
                  </div>
                </div>
              </li>

              
            ))}


{people.map((person) => (
              <li>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Alerts</h3>
                    {/* <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p> */}
                  </div>
                </div>
              </li>

              
            ))}
           
{people.map((person) => (
              <li>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">General Reports</h3>
                    {/* <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p> */}
                  </div>
                </div>
              </li>

              
            ))}

{people.map((person) => (
              <li>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">Complaints</h3>
                    {/* <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p> */}
                  </div>
                </div>
              </li>

              
            ))}

          </ul>
        </div>
      </div>
    )
  }