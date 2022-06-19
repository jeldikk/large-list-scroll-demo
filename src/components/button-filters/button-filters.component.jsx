import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { UserGridContext } from "../../contexts/users-grid.context";
import { selectGenders } from "../../redux/gender/gender.selector";

import "./button-filters.styles.scss";

const ageGroups = [
  {
    label: "0-20",
    min: 0,
    max: 19,
  },
  {
    label: "20-40",
    min: 20,
    max: 39,
  },
  {
    label: "40-60",
    min: 40,
    max: 59,
  },
  {
    label: "60-80",
    min: 60,
    max: 80,
  },
];

function ButtonFilters({ setGender, setAgeGroup }) {
  const genders = useSelector(selectGenders);
  const userGridContext = useContext(UserGridContext);
  console.log({ genders, userGridContext });
  return (
    <div className="button-filters">
      <button
        type="button"
        className="btn btn-sm btn-link fw-bold"
        onClick={() => userGridContext.resetContext()}
      >
        Reset Filters
      </button>
      <div className="btn-group genders">
        {genders.map((g) => (
          <button
            type="button"
            key={g}
            className={
              userGridContext.gender === g
                ? "btn btn-sm btn-primary"
                : "btn btn-sm btn-outline-primary"
            }
            onClick={() => userGridContext.setGenderValue(g)}
          >
            {g}
          </button>
        ))}
      </div>
      <div className="btn-group age-groups">
        {ageGroups.map((ag) => (
          <button
            type="button"
            key={ag.label}
            className={
              userGridContext.ageGroup?.label === ag.label
                ? "btn btn-sm btn-danger"
                : "btn btn-sm btn-outline-danger"
            }
            onClick={() => userGridContext.setAgeGroupValue({ ...ag })}
          >
            {ag.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ButtonFilters;
