const React = require("react");
module.exports = NavComponent = () => {
  return (
    <nav>
      <div class="container mx-auto px-6 py-2 flex justify-between items-center">
        <a class="font-bold text-2xl lg:text-4xl" href="#">
          BRAND
        </a>
        <div class="block lg:hidden">hidden large</div>
        <div class="lg:block">
          <ul class="inline-flex">
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
