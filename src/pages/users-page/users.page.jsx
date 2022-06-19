import React, { useEffect, useMemo, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonFilters from "../../components/button-filters/button-filters.component";
import SearchControl from "../../components/search-controls/search-controls.component";
import SortControls from "../../components/sort-controls/sort-controls.component";
import { setGenders } from "../../redux/gender/gender.actions";
import { setUsers } from "../../redux/users/users.actions";
import { getUsers } from "../../utils";

import { UserGridContext } from "../../contexts/users-grid.context";

import "./users.styles.scss";
import UserList from "../../components/user-list/user-list.component";
import { selectUsers } from "../../redux/users/users.selector";

function filterUsersByGender(values, gender) {
  return gender === null ? values : values.filter((v) => v.gender === gender);
}

function filterByAgeGroup(values, age) {
  return age === null
    ? values
    : values.filter((v) => v.age >= age.min && v.age < age.max);
}

function sortUsersByField(values, field, order) {
  return Array.from(values).sort((a, b) => {
    const lval = a[field];
    const rval = b[field];
    if (order === "asc") {
      if (lval > rval) return 1;
      else if (lval < rval) return -1;
      else return 0;
    } else if (order === "dsc") {
      if (lval > rval) return -1;
      else if (lval < rval) return 1;
      else return 0;
    }
  });
}

function searchByTextandFields(values, text, fields) {
  const generateId = (item, fieldsArray) => {
    return fieldsArray.map((field) => item[field]).join(":");
  };
  if (text.length === 0 || fields.size === 0) {
    return values;
  } else {
    fields = Array.from(fields);
    return values.filter((value) => {
      const itemId = generateId(value, fields);
      return itemId.includes(text);
    });
  }
}

function UsersPage() {
  const usersList = useSelector(selectUsers);
  const { gender, ageGroup, sortField, sortOrder, searchFields, searchText } =
    useContext(UserGridContext);
  const dispatch = useDispatch();
  const [loadingUsers, setLoading] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const response = await getUsers();
      const genders = response.data.reduce((prev, curr) => {
        const { gender } = curr;
        prev.add(gender);
        return prev;
      }, new Set());
      dispatch(setUsers(response.data));
      dispatch(setGenders(Array.from(genders)));
      setLoading(false);
    }

    fetchUsers();
  }, []);

  let filteredUsers = useMemo(
    () => filterUsersByGender(usersList, gender),
    [usersList, gender]
  );

  filteredUsers = useMemo(
    () => filterByAgeGroup(filteredUsers, ageGroup),
    [filteredUsers, ageGroup]
  );

  filteredUsers = useMemo(
    () => sortUsersByField(filteredUsers, sortField, sortOrder),
    [filteredUsers, sortField, sortOrder]
  );

  filteredUsers = useMemo(
    () => searchByTextandFields(filteredUsers, searchText, searchFields),
    [filteredUsers, searchText, searchFields]
  );

  return (
    <div className="userspage">
      {loadingUsers ? (
        <div>Loading ... </div>
      ) : (
        <div className="card">
          <div className="card-header">
            <p className="fw-bold">
              Users List ( Showing {filteredUsers.length}/{usersList.length} )
            </p>
            <div className="filters-sorters">
              <div className="search">
                <SearchControl />
              </div>
              <div className="button-controls">
                <ButtonFilters />
                <SortControls />
              </div>
            </div>
          </div>
          <div className="card-body">
            <UserList users={filteredUsers} />
          </div>
        </div>
      )}
    </div>
  );
}

export default UsersPage;
