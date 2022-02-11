var fs = require("fs");
var React = require("react");
var ReactDOMServer = require("react-dom/server");

const DIST_DIR = "./dist/";
const FILE_NAME = "email.html";

const MailComponent = () => {
  return (
    <html>
      {/* <meta name="color-scheme" content="only"></meta> */}
      <head></head>
      <div className="bg-slate-50">
        <h1>Welcome to our mailing list!</h1>
        <p className="text-sky-400/50">We are pleased to meet you</p>
      </div>
    </html>
  );
};

const emailHtml = ReactDOMServer.renderToStaticMarkup(<MailComponent />);

fs.writeFileSync(`${DIST_DIR}${FILE_NAME}`, emailHtml);
console.log(`\x1b[32mEMPOZE\x1b[0m Email written to: ${DIST_DIR}${FILE_NAME}`);
