import React, { Dispatch, SetStateAction } from "react";

export interface Provider {
  last_name: string;
  first_name: string;
  email_address: string;
  specialty: string;
  practice_name: string;
}

interface ProviderItemProps {
  provider: Provider;
  setDeleteQueue: Dispatch<SetStateAction<string[]>>;
}

const ProviderItem = ({ provider, setDeleteQueue }: ProviderItemProps) => {
  const toggleCheckbox = (e: React.FormEvent<HTMLInputElement>) => {
    // if the click checks a provider's checkbox, lets add them to the deletion queue for a bulk delete. Otherwise,
    // let's do remove them from the deletion queue.
    const providerClicked = e.currentTarget;
    if (providerClicked.checked) {
      setDeleteQueue((prevState) => [...prevState, providerClicked.value]);
      return;
    }

    setDeleteQueue((prevState) =>
      prevState.filter((provider) => provider !== providerClicked.value)
    );
  };

  return (
    <li key={provider.email_address} className="list__item">
      <input
        type="checkbox"
        value={provider.email_address}
        onClick={toggleCheckbox}
      />
      <div className="provider">
        <h2 className="provider__name">{`${provider.last_name}, ${provider.first_name}`}</h2>
        <p className="provider__specialty">{provider.specialty}</p>
        <p className="provider__email">{provider.email_address}</p>
        <p className="provider__practice">{provider.practice_name}</p>
      </div>
    </li>
  );
};

export default ProviderItem;
