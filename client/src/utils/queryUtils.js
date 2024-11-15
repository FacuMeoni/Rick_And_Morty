export const getInitialFilters = (queryParams) => ({
    gender: queryParams.get("gender") || false,
    name: queryParams.get("name") || false,
    status: queryParams.get("status") || false,
    currentPage: Number(queryParams.get("page") || 1)
});

export const updateQueryParams = ({ queryParams, key,  value, setFilters} ) => {
    if (key === "name") { //if key is name, reset other filters and set name value.
        queryParams.set("name", value);
        queryParams.delete("gender");
        queryParams.delete("status");

        setFilters({
            name: value,
            status: false,
            gender: false,
        });
    } else if (value === "" || queryParams.get(key) === value) { // Else if value empty or the same of query params key, delete.
        queryParams.delete(key);
        setFilters((prev) => ({ ...prev, [key]: false }));
    } else { // Else update an specific filter with the new value.
        queryParams.set(key, value);
        setFilters((prev) => ({ ...prev, [key]: value }));
    }

    //reset to page 1 and update filters.
    queryParams.set("page", 1);
    setFilters((prev) => ({ ...prev, currentPage: 1 }));
}

export const resetQueryParams = ({ queryParams, filter, setFilters}) => {
  if (filter === "name") {  // if filter parameter is name, delete all query params and reset filters.
    queryParams.delete("name");
    queryParams.delete("gender");
    queryParams.delete("status");
    setFilters({ status: false, gender: false, name: false });
    } else {  // else delete gender&status query params and reset filters.
        queryParams.delete("gender");
        queryParams.delete("status");
        setFilters((prev) => ({ ...prev, gender: false, status: false  }));
    }

    //reset to page 1 and update filters.
    queryParams.set("page", 1);
    setFilters((prev) => ({ ...prev, currentPage: 1 }));
}