export const getInitialFilters = (queryParams) => ({
    gender: queryParams.get("gender") || false,
    name: queryParams.get("name") || false,
    status: queryParams.get("status") || false,
    currentPage: Number(queryParams.get("page") || 1)
});

export const updateQueryParams = ({ queryParams, key,  value, setFilters} ) => {
    if (key === "name") { 
        queryParams.set("name", value);
        queryParams.delete("gender");
        queryParams.delete("status");

        setFilters({
            name: value,
            status: false,
            gender: false,
        });
    } else if (value === "" || queryParams.get(key) === value) { 
        queryParams.delete(key);
        setFilters((prev) => ({ ...prev, [key]: false }));
    } else { 
        queryParams.set(key, value);
        setFilters((prev) => ({ ...prev, [key]: value }));
    }


    queryParams.set("page", 1);
    setFilters((prev) => ({ ...prev, currentPage: 1 }));
}

export const resetQueryParams = ({ queryParams, filter, setFilters}) => {
  if (filter === "name") { 
    queryParams.delete("name");
    queryParams.delete("gender");
    queryParams.delete("status");
    setFilters({ status: false, gender: false, name: false });
    } else { 
        queryParams.delete("gender");
        queryParams.delete("status");
        setFilters((prev) => ({ ...prev, gender: false, status: false  }));
    }


    queryParams.set("page", 1);
    setFilters((prev) => ({ ...prev, currentPage: 1 }));
}