const React = require("react");
module.exports = NavComponent = () => {
  return (
    <nav>
      <div class="text-center sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-gray supports-backdrop-blur:bg-gray/95 dark:bg-slate-900/75">
        <a class="font-bold larger text-2xl lg:text-4xl" href="#">
          BRAND
        </a>
        <div>
          <ul class="inline-flex list-none">
            <li>
              <a class="px-4 font-bold" href="/">
                TWITTER
              </a>
            </li>
            <li>
              <a class="px-4 hover:text-gray-800" href="#">
                GITHUB
              </a>
            </li>
            <li>
              <a class="px-4 hover:text-gray-800" href="#">
                EMAIL
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
