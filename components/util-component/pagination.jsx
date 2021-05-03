export default function Pagination() {
  return (
    <div className="flex flex-row-reverse mt-5">
      <div className="flex text-gray-700">
        <div className="h-8 w-8 mr-1 flex justify-center items-center rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-left w-4 h-4"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
        <div className="flex h-8 font-medium rounded-full bg-gray-200">
          <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition rounded-full bg-blue-300 text-white">
            1
          </div>
          <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition rounded-full">
            2
          </div>
          <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition rounded-full">
            5
          </div>
          <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition rounded-full">
            ...
          </div>
          <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition rounded-full">
            15
          </div>
          <div className="w-8 h-8 md:hidden flex justify-center items-center cursor-pointer leading-5 transition rounded-full bg-pink-600 text-white">
            4
          </div>
        </div>
        <div className="h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right w-4 h-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}
