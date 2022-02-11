const fs = require("fs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const pkg = (packageJSON = require("./package.json"));
const juice = require("juice");
const MailComponent = require("./components/html.js");

const DEPLOY_DIR = `./${pkg.config.deploy}/`;
const FILE_NAME = `email.html`;

const emailHtml = ReactDOMServer.renderToStaticMarkup(
  <MailComponent version={pkg.version} />
);

juice.juiceResources(
  emailHtml,
  {
    webResources: {
      relativeTo: "./",
    },
  },
  (err, processed) => {
    if (err) {
      new Error(`Could not juice email${err}`);
    }
    fs.writeFileSync(`${DEPLOY_DIR}${FILE_NAME}`, processed);
    console.log(
      `\x1b[32mEMPOZE\x1b[0m Email written to: ${DEPLOY_DIR}${FILE_NAME}`
    );
  }
);
