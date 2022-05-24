import { useState } from "react";
import providerData from "../../sample-data.json";
import ProviderItem from "../Provider/Provider";

const ProviderList = () => {
  const [providers, setProviders] = useState(providerData);

  return (
    <ul className="list">
      {providers.map((provider) => (
        <ProviderItem key={provider.email_address} provider={provider} />
      ))}
    </ul>
  );
};

export default ProviderList;
