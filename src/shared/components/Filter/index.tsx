import React from 'react';
import { Category, IFilterContext } from '../../../interfaces/filter';
import FilterItem from './FilterItem';
import { FilterContext } from '../../../context/FilterContex';
import { FilterSpace } from './styles';

interface FilterProps {
  items: Category[];
}

const Filter: React.FC<FilterProps> = ({ items }) => {
  const filterContext = React.useContext<IFilterContext>(FilterContext);

  return (
    <FilterSpace>
      {items.map(item => (
        <FilterItem item={item} filterContext={filterContext} key={item.id} />
      ))}
    </FilterSpace>
  );
};

export default Filter;