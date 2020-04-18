import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import AppShell from "./AppBar";
import TextScreen from "./TextScreen";
import FileScreen from "./FileScreen";
import WordCloudScreen from "./WordCloudScreen";

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppShell>
          <div>
            <Route exact path="/" component={TextScreen} />
            <Route exact path="/file" component={FileScreen} />
            <Route exact path="/wc" component={WordCloudScreen} />
          </div>
        </AppShell>
      </Router>
    );
  }
}

export default App;
