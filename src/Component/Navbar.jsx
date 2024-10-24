import React from 'react'

const Navbar = () => {
  return (
    <header class="text-gray-200 body-font bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl text-white">CareerSync</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5  hover:text-gray-100 cursor-pointer">First Link</a>
        <a class="mr-5 hover:text-gray-100 cursor-pointer">Second Link</a>
        <a class="mr-5 hover:text-gray-100 cursor-pointer">Third Link</a>
        <a class="mr-5 hover:text-gray-100 cursor-pointer">Fourth Link</a>
      </nav>
      <button class="inline-flex items-center text-blue-800 bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-white rounded text-base mt-4 md:mt-0">Login      </button>
      <button class="inline-flex items-center ml-1 text-blue-800 bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-white rounded text-base mt-4 md:mt-0">Sign-Up      </button>
    </div>
  </header>  )
}

export default Navbar
