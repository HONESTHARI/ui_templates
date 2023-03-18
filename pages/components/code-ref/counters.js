import React from 'react'

export default function Counters() {
  return (
    <div>
        {/* <!-- This is an example component --> */}
<div class="py-5">
        <main class="h-full overflow-y-auto">
            <div class="container  mx-auto grid">
           
            
              {/* <!-- Cards --> */}
              <div class="grid gap-6 text-center mx-auto mb-8 md:grid-cols-2 xl:grid-cols-4">
                {/* <!-- Card==1 --> */}
                <div class="flex items-center  p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                  {/* <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                  </div> */}
                  <div className='text-center text-3xl'>
                    <p class="mb-2  font-medium text-gray-600 dark:text-gray-400">
                     1999
                    </p>
                    <p class=" font-semibold text-gray-700 dark:text-gray-200">
                    Year we launched
                    </p>
                  </div>
                </div>
                {/* <!-- Card==2 --> */}
                <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                  {/* <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                  </div> */}
                  <div className='text-center text-3xl'>
                    <p class="mb-2  font-medium text-gray-600 dark:text-gray-400">
                    50+
                    </p>
                    <p class=" font-semibold text-gray-700 dark:text-gray-200">
                    Employees
                    </p>
                  </div>
                </div>
                {/* <!-- Card ==3 --> */}
                <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                  {/* <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                  </div> */}
                  <div className='text-center text-3xl'>
                    <p class="mb-2  font-medium text-gray-600 dark:text-gray-400">
                   20 +
                    </p>
                    <p class=" font-semibold text-gray-700 dark:text-gray-200">
                    Types of Businesses
                    </p>
                  </div>
                </div>
               
              </div>
  
            </div>
        </main>
    </div>
      
    </div>
  )
}
