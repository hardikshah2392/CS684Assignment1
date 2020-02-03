var contentNode = document.getElementById('contents');
var component = <div className="grid-container">
    <div className="name">
      <h1> Hardik Shah </h1>
    </div>
    <div className="image">
      <img src= "./img/my_img.jpg" alt="My HeadShot" width="200" height="200"></img>
    </div>
    <div className="bio">
      Currently pursuing Master's in Computer Science from San Diego State University. Lookoing for a full-time opportuninty in the field of Web-development. Well versed with modern web development technologies including Node, React, MongoDB and Express.
    </div>
    <div className="git"><button className='button1'>
      <a href="https://github.com/hardikshah2392/" target = "_blank" className="myButton">My Github</a></button>
    </div>
  </div>;
ReactDOM.render(component, contentNode);