import React, { FunctionComponent } from "react";
import { Hello } from "components";

const App: FunctionComponent = () => {
  return (
    <div>
      <Hello compiler="TypeScript" framework="React" />,
    </div>
  );
};

export default App;
