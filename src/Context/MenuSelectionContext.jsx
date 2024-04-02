import { createContext, useContext, useState } from 'react';

const MenuSelectionContext = createContext();

export const useMenuSelectionContext = () => useContext(MenuSelectionContext);

export const MenuSelectionProvider = ({ children }) => {
  const [selectedCategory, setselectedCategory] = useState(null);
  const [selectedSubCategory, setselectedSubCategory] = useState(null);

  return (
    <MenuSelectionContext.Provider
      value={{
        selectedCategory,
        selectedSubCategory,
        setselectedCategory,
        setselectedSubCategory,
      }}
    >
      {children}
    </MenuSelectionContext.Provider>
  );
};
