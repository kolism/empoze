const React = require("react");
const NavComponent = require("./nav/nav.js");
module.exports = MailComponent = (props) => {
  return (
    <html class="dark">
      {/* <meta name="color-scheme" content="only"></meta> */}
      <head>
        <link href="src/custom.css" rel="stylesheet" data-inline />
        <link href="deploy/email.css" rel="stylesheet" data-inline />
      </head>
      <body class="text-orange-600">
        <NavComponent />
        <div class="container mx-auto">
          <h1 class="text-center box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
            Welcome, New Member!
          </h1>
          <div class="flex justify-start justify-between justify-evenly">
            <div class="w-full max-w-xs rounded shadow-md shadow-indigo-600">
              <div class="p-4 bg-indigo-600">
                <div>
                  <h2 class="mb-4 text-xl font-bold text-gray-100">
                    <span class="underline decoration-gray-100 decoration-wavy">
                      Tailwind v3
                    </span>
                    Card
                  </h2>
                  <p class="text-gray-100">
                    Lorem,
                    <span class="underline decoration-red-600 decoration-solid">
                      tailwind v3 features
                    </span>
                    sit amet consectetur
                    <span class="underline decoration-2 decoration-red-600 decoration-solid">
                      adipis
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full max-w-xs rounded shadow-md shadow-emerald-600">
              <div class="p-4 bg-emerald-600">
                <div>
                  <h2 class="mb-4 text-xl font-bold text-gray-100">
                    <span class="underline decoration-gray-100 decoration-wavy">
                      Tailwind v3
                    </span>
                    Card
                  </h2>
                  <p class="text-gray-100">
                    Lorem,
                    <span class="underline decoration-red-600 decoration-solid">
                      tailwind v3 features
                    </span>
                    sit amet consectetur
                    <span class="underline decoration-2 decoration-red-600 decoration-solid">
                      adipis
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full max-w-xs rounded shadow-md shadow-rose-600">
              <div class="p-4 bg-rose-600">
                <div>
                  <h2 class="mb-4 text-xl font-bold text-gray-100">
                    <span class="underline decoration-gray-100 decoration-wavy">
                      Tailwind v3
                    </span>
                    Card
                  </h2>
                  <p class="text-gray-100">
                    Lorem,
                    <span class="underline decoration-red-600 decoration-solid">
                      tailwind v3 features
                    </span>
                    sit amet consectetur
                    <span class="underline decoration-2 decoration-red-600 decoration-solid">
                      adipis
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sky-200">We are pleased to meet you</p>

          <button
            type="button"
            class="text-white border-0 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Red
          </button>
          <button
            type="button"
            class="text-white border-0 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            Yellow
          </button>
          <button
            type="button"
            class="text-white border-0 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Purple
          </button>
          <h2>Made with EMPOZE v{props.version} </h2>
        </div>
      </body>
    </html>
  );
};
