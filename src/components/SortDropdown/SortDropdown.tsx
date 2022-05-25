import React, { ChangeEvent } from "react";

export enum Fields {
  "First Name (asc)" = "first_name-asc",
  "First Name (desc)" = "first_name-desc",
  "Last Name (asc)" = "last_name-asc",
  "Last Name (desc)" = "last_name-desc",
  "Email (asc)" = "email_address-asc",
  "Email (desc)" = "email_address-desc",
  "Specialty (asc)" = "specialty-asc",
  "Specialty (desc)" = "specialty-desc",
  "Practice (asc)" = "practice_name-asc",
  "Practice (desc)" = "practice_name-desc",
  "Sort providers by" = "init",
}

export interface SortDropdownProps {
  handleSort: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SortDropdown = ({ handleSort }: SortDropdownProps) => {
  const options = Object.keys(Fields).map((field: any) => (
    <React.Fragment key={field}>
      <option className="sort__option" value={field}>
        {field}
      </option>
    </React.Fragment>
  ));

  return (
    <form className="sort">
      <label htmlFor="sortType" className="sort__label">
        Sort By
      </label>
      <select
        className="sort"
        name="sortType"
        id="sortType"
        onChange={handleSort}
        defaultValue="Sort providers by"
      >
        {options}
      </select>
    </form>
  );
};

export default SortDropdown;
