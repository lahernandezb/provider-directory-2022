export interface Provider {
  last_name: string;
  first_name: string;
  email_address: string;
  specialty: string;
  practice_name: string;
}

interface ProviderItemProps {
  provider: Provider;
}

const ProviderItem = ({ provider }: ProviderItemProps) => (
  <li key={provider.email_address} className="list__item">
    <div className="provider">
      <h2 className="provider__name">{`${provider.last_name}, ${provider.first_name}`}</h2>
      <p className="provider__specialty">{provider.specialty}</p>
      <p className="provider__email">{provider.email_address}</p>
      <p className="provider__practice">{provider.practice_name}</p>
    </div>
  </li>
);

export default ProviderItem;
