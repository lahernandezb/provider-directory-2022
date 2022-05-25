import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import ProviderItem, { Provider } from "../Provider/Provider";
import SortDropdown, { Fields } from "../SortDropdown/SortDropdown";
import "./providerList.scss";

export interface ProviderLsitProps {
  providers: Provider[];
  setProviders: Dispatch<SetStateAction<Provider[]>>;
}
const ProviderList = ({ providers, setProviders }: ProviderLsitProps) => {
  const [deleteQueue, setDeleteQueue] = useState<string[] | []>([]);

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    // When indexing an enum TS does not know if the string is a property of Fields. The keyof operator returrns a unions of protery names of the type Fields. When you create an enum, TypeScript creates both a type (which is a subtype of number) and a value (the enum object that you can reference). When you write keyof Fields, you're going to get a union of the literal property names of number. To get the property names of the enum object, you can use keyof typeof Fields.
    const sortColumn =
      Fields[e.currentTarget.value as keyof typeof Fields].split("-")[0];
    const sortDirection =
      Fields[e.currentTarget.value as keyof typeof Fields].split("-")[1];

    const sortedProviders = [...providers].sort(
      (a: { [index: string]: any }, b: { [index: string]: any }) => {
        if (a[sortColumn] === b[sortColumn]) return 0;

        if (a[sortColumn] < b[sortColumn]) {
          return sortDirection === "desc" ? 1 : -1;
        }

        if (a[sortColumn] > b[sortColumn]) {
          return sortDirection === "desc" ? -1 : 1;
        }

        return 0;
      }
    );
    setProviders(sortedProviders);
  };

  const handleDelete = () => {
    // Why a use Set data structure? Two reasons: 1) Even though IE is being phased out Array.includes is not supported where Set.has is. 2) more importantly, when coming dealing with large quantities of data, has() is significanlty faster than includes().
    const deletionQueueSet = new Set(deleteQueue);

    setProviders((previousProviders) =>
      previousProviders.filter(
        ({ email_address }) => !deletionQueueSet.has(email_address)
      )
    );
  };

  return (
    <div className="list-container">
      <SortDropdown handleSort={handleSort} />
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
    </div>
  );
};

export default ProviderList;
