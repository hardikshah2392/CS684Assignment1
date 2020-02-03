var contentNode = document.getElementById('contents');
var component = React.createElement(
  "div",
  { className: "grid-container" },
  React.createElement(
    "div",
    { className: "name" },
    React.createElement(
      "h1",
      null,
      " Hardik Shah "
    )
  ),
  React.createElement(
    "div",
    { className: "image" },
    React.createElement("img", { src: "./img/my_img.jpg", alt: "My HeadShot", width: "200", height: "200" })
  ),
  React.createElement(
    "div",
    { className: "bio" },
    "Currently pursuing Master's in Computer Science from San Diego State University. Lookoing for a full-time opportuninty in the field of Web-development. Well versed with modern web development technologies including Node, React, MongoDB and Express."
  ),
  React.createElement(
    "div",
    { className: "git" },
    React.createElement(
      "button",
      { className: "button1" },
      React.createElement(
        "a",
        { href: "https://github.com/hardikshah2392/", target: "_blank", className: "myButton" },
        "My Github"
      )
    )
  )
);
ReactDOM.render(component, contentNode);