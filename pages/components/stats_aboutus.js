import React from "react";
const stats = [
    { id: 1, name: 'Tax Experts', value: '100+' },
    { id: 2, name: 'year of establishment', value: '2019' },
    { id: 3, name: ' Clients ', value: '300+' },
    // { id: 4, name: 'our journey ', value: '2' },
  ]
  
  export default function StatsAbout() {
    return (
      <div className="bg-white py-20 sm:py-32"> 
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h1 className="PatuaOne tracking-wider text-3xl font-medium  text-gray-900 sm:text-4xl">
             Symbolic representation of company facts
              </h1>
            </div>
            <dl className="mt-16 grid grid-cols-1  overflow-hidden rounded-2xl text-center sm:grid-cols-1 lg:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                  <dt className="text-sm leading-10  text-gray-600 catamaran font-medium text-center">{stat.name}</dt>
                  <dd className="order-first text-5xl tracking-tight text-gray-900 PTSerif font-medium">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }