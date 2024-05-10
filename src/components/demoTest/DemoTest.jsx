import React from "react";

function DemoTest() {
  return (
    <>
      <div id="test" className="m-4 text-center">
        <h1 className="text-4xl p-4 font-bold text-yellow-500 text-center">
          Take Test
        </h1>
      </div>
      <div className="p-2 flex flex-col sm:flex-row justify-center mb-10">
        <a
          href="https://forms.gle/GEcM5bv9EU7nVMMg6"
          className="flex-shrink-0 text-white text-center bg-blue-950 border-0 py-2 px-8 focus:outline-none hover:bg-none rounded text-lg m-5"
        >
          Web Development
        </a>

        <a
          href="https://forms.gle/7o4o88vi2zWQdBPd9"
          className="flex-shrink-0 text-white text-center bg-blue-950 border-0 py-2 px-8 focus:outline-none hover:bg-none rounded text-lg m-5"
        >
          Java
        </a>

        <a
          href="https://forms.gle/BP4RJkwow1aCz4s16"
          className="flex-shrink-0 text-white text-center bg-blue-950 border-0 py-2 px-8 focus:outline-none hover:bg-none rounded text-lg m-5 "
        >
          Python
        </a>

        <a
          href="https://forms.gle/yGwM9nvTKtY6C2Jo7"
          className="flex-shrink-0 text-white text-center bg-blue-950 border-0 py-2 px-8 focus:outline-none hover:bg-none rounded text-lg m-5 "
        >
          Aptitude
        </a>
      </div>
    </>
  );
}

export default DemoTest;
