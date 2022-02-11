const React = require("react");
const NavComponent = require("./nav/nav.js");
module.exports = MailComponent = (props) => {
  return (
    <html>
      {/* <meta name="color-scheme" content="only"></meta> */}
      <head>
        <link href="custom.css" rel="stylesheet" data-inline />
      </head>
      <body class="text-gray-200">
        <NavComponent />
        <div>
          <h1>Welcome to our mailing list!</h1>
          <p className="text-sky-400/50">We are pleased to meet you</p>
          <h2>Made with EMPOZE v{props.version} </h2>
        </div>
      </body>
    </html>
  );
};
