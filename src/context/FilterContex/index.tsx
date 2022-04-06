import React, { useCallback, useState } from 'react';
import { CategoryId, IFilterContext } from '../../interfaces/filter';

export const FilterContext = React.createContext<IFilterContext>({
  id: 'all',
  changeId: () => null
});

const FilterContextProvider: React.FC = ({ children }) => {
  const [filterId, setFilterId] = useState<CategoryId>('all')

  const changeId = useCallback((id: CategoryId) => {
    setFilterId(id);
  }, []);

  return (
    <FilterContext.Provider value={{ id: filterId, changeId }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;