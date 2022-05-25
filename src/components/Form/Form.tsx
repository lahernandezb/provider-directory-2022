import React, {
  useState,
  Dispatch,
  SetStateAction,
  FormEventHandler,
  SyntheticEvent,
} from "react";
import { Provider } from "../Provider/Provider";
import "./form.scss";

export interface FormProps {
  setProviders: Dispatch<SetStateAction<Provider[]>>;
}

const Form = ({ setProviders }: FormProps) => {
  const [formState, setFormState] = useState({
    lastName: "",
    firstName: "",
    email: "",
    specialty: "",
    practice: "",
  });
  const { lastName, firstName, email, specialty, practice } = formState;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    // create object with keys that match the sample data. I prefer camel case in as html attributes to avoid confusiong with BEM naming convention for classses
    const incomingProvider = {
      last_name: lastName,
      first_name: firstName,
      email_address: email,
      specialty,
      practice_name: practice,
    };

    setProviders((previousProviders) => [
      incomingProvider,
      ...previousProviders,
    ]);

    setFormState({
      lastName: "",
      firstName: "",
      email: "",
      specialty: "",
      practice: "",
    });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <div className="form-container">
      <p className="form-title">Create Provider</p>
      <form className="form" action="submit" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="lastName">
          Last Name
          <input
            required
            id="lastName"
            name="lastName"
            onChange={handleChange}
            type="text"
            value={lastName}
            className="form__lastName"
          />
        </label>
        <label className="form__label" htmlFor="firstName">
          First Name
          <input
            required
            id="firstName"
            name="firstName"
            onChange={handleChange}
            type="text"
            value={firstName}
            className="form__firstName"
          />
        </label>
        <label className="form__label" htmlFor="email">
          Email
          <input
            required
            id="email"
            name="email"
            onChange={handleChange}
            type="text"
            value={email}
            className="form__email"
          />
        </label>
        <label className="form__label" htmlFor="specialty">
          Specialty
          <input
            required
            id="specialty"
            name="specialty"
            onChange={handleChange}
            type="text"
            value={specialty}
            className="form__specialty"
          />
        </label>
        <label className="form__label" htmlFor="practice">
          Practice Name
          <input
            required
            id="practice"
            name="practice"
            onChange={handleChange}
            type="text"
            value={practice}
            className="form__practice"
          />
        </label>
        <input className="form__submit" type="submit" value="Add Provider" />
      </form>
    </div>
  );
};

export default Form;
