var fs = require("fs");
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var pkg = (packageJSON = require("./package.json"));

const DIST_DIR = `./${pkg.config.dist}/`;
const FILE_NAME = `email.html`;

const MailComponent = (props) => {
  return (
    <html>
      {/* <meta name="color-scheme" content="only"></meta> */}
      <head>
        <link href="custom.css" rel="stylesheet" data-inline />
      </head>
      <body>
        <div className="bg-slate-50">
          <h1>Welcome to our mailing list!</h1>
          <p className="text-sky-400/50">We are pleased to meet you</p>
          <h2>Made with EMPOZE v{props.version} </h2>
        </div>
      </body>
    </html>
  );
};

const emailHtml = ReactDOMServer.renderToStaticMarkup(
  <MailComponent version={pkg.version} />
);

fs.writeFileSync(`${DIST_DIR}${FILE_NAME}`, emailHtml);
console.log(`\x1b[32mEMPOZE\x1b[0m Email written to: ${DIST_DIR}${FILE_NAME}`);
