import React, { useContext } from "react";
import { UserGridContext } from "../../contexts/users-grid.context";
import "./sort-controls.styles.scss";

function SortControls() {
  const userGridContext = useContext(UserGridContext);
  return (
    <div className="sort-controls">
      {/* <label>Sort By</label> */}
      <select
        className="d-inline-block form-control-sm"
        onChange={(event) =>
          userGridContext.setSortFieldValue(event.target.value)
        }
      >
        <option value="username">Username</option>
        <option value="firstName">Firstname</option>
        <option value="lastName">Lastname</option>
        <option value="email">Email</option>
        <option value="age">Age</option>
      </select>
      <button
        type="button"
        className="btn btn-sm"
        onClick={() => userGridContext.toggleSortOrderValue()}
      >
        <i className="bi-arrow-down-up"></i>
      </button>
    </div>
  );
}

export default SortControls;
