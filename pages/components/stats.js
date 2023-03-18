import React from "react";
const stats = [
    { id: 1, name: 'Branches', value: '15 +' },
    { id: 2, name: 'industries', value: '25 +' },
    { id: 3, name: ' Clients', value: '300 +' },
    { id: 4, name: 'our journey ', value: '2' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h1 className="PatuaOne tracking-wider text-3xl font-medium  text-gray-900 sm:text-4xl">
              Bookxpert journey
             
              </h1>
              <p className="catamaran mt-4 text-lg leading-8 text-gray-600 font-medium">
              {/* Here we will place facts about our company in a symbolic representation like GOI Recognized */}
              A GOI Recognized Accounting firm 
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1  overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                  <dt className="text-sm leading-6 text-gray-600 catamaran font-medium text-center">{stat.name}</dt>
                  <dd className="order-first text-3xl tracking-tight text-gray-900 PTSerif font-medium">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }