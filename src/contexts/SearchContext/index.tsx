import React, { createContext, useContext, useState } from "react";

interface ISearch {
  searchQuery: string | null;
  setSearchQuery: (q: any) => void;
}

interface IProvider {
  children: React.ReactNode;
}

export const SearchContext = createContext<ISearch | null>(null);

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("Components must be used within a <SearchProvider/>");
  }
  return context;
};

export function SearchProvider({ children }: IProvider) {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
