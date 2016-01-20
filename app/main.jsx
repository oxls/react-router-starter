import React from "react";
import ReactDOM from "react-dom";

import { Router, IndexRoute, Route, browserHistory } from "react-router";


import App from "./components/App.jsx";
import Home from "./components/pages/Home.jsx";
import Lesson from "./components/pages/Lesson.jsx";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="lesson" component={Lesson} />
    </Route>
  </Router>,
  document.body.appendChild(document.createElement("div"))
);
