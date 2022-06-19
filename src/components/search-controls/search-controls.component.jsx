import React, { useCallback, useContext, useEffect } from "react";
import { debounce } from "lodash";
import { UserGridContext } from "../../contexts/users-grid.context";

import "./search-controls.styles.scss";

function SearchControl() {
  const userGridContext = useContext(UserGridContext);

  const setTextDebounced = debounce((value) => {
    userGridContext.setSearchTextValue(value);
  }, 500);

  useEffect(() => {
    return () => {
      setTextDebounced.cancel();
    };
  });

  return (
    <div className="search-controls">
      <div className="form-group">
        <small htmlFor="search-box">Selective Filtering</small>
        <input
          id="search-box"
          type="text"
          className="form-control form-control-sm"
          placeholder="enter text"
          onChange={(event) => setTextDebounced(event.target.value)}
        />
      </div>
      <div className="checkboxes">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="username-checkbox"
            value="username"
            checked={userGridContext.searchFields.has("username")}
            onChange={(event) =>
              userGridContext.toggleSearchFieldValue(event.target.value)
            }
          />
          <label className="form-check-label" htmlFor="username-checkbox">
            Username
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="email-checkbox"
            value="email"
            checked={userGridContext.searchFields.has("email")}
            onChange={(event) =>
              userGridContext.toggleSearchFieldValue(event.target.value)
            }
          />
          <label className="form-check-label" htmlFor="email-checkbox">
            Email
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="gender-checkbox"
            value="gender"
            checked={userGridContext.searchFields.has("gender")}
            onChange={(event) =>
              userGridContext.toggleSearchFieldValue(event.target.value)
            }
          />
          <label className="form-check-label" htmlFor="gender-checkbox">
            Gender
          </label>
        </div>
      </div>
    </div>
  );
}

export default SearchControl;
