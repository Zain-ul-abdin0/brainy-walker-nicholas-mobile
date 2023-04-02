import React from "react";
import RootStack from "./SourceCode/RootStack";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }
  render() {
    return <RootStack />;
  }
}
export default App;
