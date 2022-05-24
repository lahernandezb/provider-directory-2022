import ProviderItem, { Provider } from "../Provider/Provider";

export interface ProviderLsitProps {
  providers: Provider[];
}
const ProviderList = ({ providers }: ProviderLsitProps) => {
  return (
    <ul className="list">
      {providers.map((provider) => (
        <ProviderItem key={provider.email_address} provider={provider} />
      ))}
    </ul>
  );
};

export default ProviderList;
