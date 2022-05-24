import Form from "./components/Form/Form";
import ProviderList from "./components/ProviderList/ProviderList";

function App() {
  return (
    <div className="app">
      <h1 className="app__heading">Provider Directory</h1>
      <Form />
      <ProviderList />
    </div>
  );
}

export default App;
