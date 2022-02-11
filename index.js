// @ts-ignore

var React = require("react");
var ReactDOMServer = require("react-dom/server");

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
console.log("EMAILHTML", emailHtml);
