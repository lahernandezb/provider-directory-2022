import { useState } from "react";
import Form from "./components/Form/Form";
import ProviderList from "./components/ProviderList/ProviderList";
import providerData from "./sample-data.json";

function App() {
  const [providers, setProviders] = useState(providerData);

  return (
    <div className="app">
      <h1 className="app__heading">Provider Directory</h1>
      <Form {...{ providers, setProviders }} />
      <ProviderList providers={providers} />
    </div>
  );
}

export default App;
