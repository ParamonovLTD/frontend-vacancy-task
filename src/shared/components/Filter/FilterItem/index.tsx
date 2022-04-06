import React from 'react';
import { Category, IFilterContext } from '../../../../interfaces/filter';
import { FilterItemButton } from './styles';

interface FilterItemProps {
  item: Category;
  filterContext: IFilterContext;
}

const FilterItem: React.FC<FilterItemProps> = ({ item, filterContext }) => {
  const { id, changeId } = filterContext
  return (
    <FilterItemButton onClick={() => changeId(item.id)} isSelected={id === item.id}>
      {item.title}
    </FilterItemButton>
  );
};

export default FilterItem;