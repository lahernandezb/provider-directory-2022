import { Dispatch, SetStateAction, useState } from "react";
import ProviderItem, { Provider } from "../Provider/Provider";

export interface ProviderLsitProps {
  providers: Provider[];
  setProviders: Dispatch<SetStateAction<Provider[]>>;
}
const ProviderList = ({ providers, setProviders }: ProviderLsitProps) => {
  const [deleteQueue, setDeleteQueue] = useState<string[] | []>([]);

  const handleDelete = () => {
    // Why a use Set data structure? Two reasons: 1) Even though IE is being phased out Array.includes is not supported where Set.has is. 2) more importantly, when coming dealing with large quantities of data, has() is significanlty faster than includes()
    const deletionQueueSet = new Set(deleteQueue);

    setProviders((previousProviders) =>
      previousProviders.filter(
        ({ email_address }) => !deletionQueueSet.has(email_address)
      )
    );
  };
  return (
    <>
      <ul className="list">
        {providers.map((provider) => (
          <ProviderItem
            {...{ provider, setDeleteQueue }}
            key={provider.email_address}
          />
        ))}
      </ul>
      <button className="delete" onClick={handleDelete}>
        Remove
      </button>
    </>
  );
};

export default ProviderList;
