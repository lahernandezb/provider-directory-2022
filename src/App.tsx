import { useState } from "react";
import Form from "./components/Form/Form";
import ProviderList from "./components/ProviderList/ProviderList";
import providerData from "./sample-data.json";

import "./App.scss";

function App() {
  const [providers, setProviders] = useState(providerData);

  return (
    <div className="app">
      <h1 className="app__heading">Provider Directory</h1>
      <div className="app__content">
        <Form setProviders={setProviders} />
        <ProviderList {...{ providers, setProviders }} />
      </div>
    </div>
  );
}

export default App;
