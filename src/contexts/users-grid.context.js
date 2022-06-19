import { createContext, useState } from "react";

export const UserGridContext = createContext({
  gender: null,
  ageGroup: null,
  sortField: "username",
  sortOrder: "asc",
  searchFields: null,
  searchText: "",
  setGenderValue: (v) => {},
  setAgeGroupValue: (v) => {},
  setSortFieldValue: (v) => {},
  toggleSortOrderValue: () => {},
  toggleSearchFieldValue: (v) => {},
  setSearchTextValue: (v) => {},
  resetContext: () => {},
});

export function UserGridContextProvider(props) {
  const [gender, setGender] = useState(null);
  const [ageGroup, setAgeGroup] = useState(null);
  const [sortField, setSortField] = useState("username");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchText, setSearchText] = useState("");
  const [searchFields, setSearchFields] = useState(new Set());

  function setGenderValue(gndr) {
    setGender((prevValue) => {
      if (prevValue === gndr) {
        return null;
      }
      return gndr;
    });
  }

  function setAgeGroupValue(agroup) {
    setAgeGroup((prevValue) => {
      if (prevValue?.label === agroup?.label) {
        return null;
      }
      return agroup;
    });
  }

  function setSortFieldValue(sfield) {
    setSortField(sfield);
  }

  function toggleSortOrderValue() {
    setSortOrder((prevVal) => {
      if (prevVal === "asc") {
        return "dsc";
      } else if (prevVal === "dsc") {
        return "asc";
      }
    });
  }

  function setSearchTextValue(value) {
    setSearchText(value);
  }

  function toggleSearchFieldValue(value) {
    setSearchFields((prevValue) => {
      if (prevValue.has(value)) {
        prevValue.delete(value);
      } else {
        prevValue.add(value);
      }
      return new Set(Array.from(prevValue));
    });
  }

  function resetContext() {
    setGenderValue(null);
    setAgeGroupValue(null);
    setSortFieldValue("username");
    setSearchTextValue("");
    toggleSearchFieldValue(new Set());
  }

  const contextValue = {
    gender,
    ageGroup,
    sortField,
    sortOrder,
    searchFields,
    searchText,
    setGenderValue,
    setAgeGroupValue,
    setSortFieldValue,
    setSearchTextValue,
    toggleSortOrderValue,
    toggleSearchFieldValue,
    resetContext,
  };
  return (
    <UserGridContext.Provider value={contextValue}>
      {props.children}
    </UserGridContext.Provider>
  );
}
