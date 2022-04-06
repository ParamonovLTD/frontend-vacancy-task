import { TokenCategory } from '../tokens';

export type CategoryId = TokenCategory | 'all'
export interface Category {
  id: CategoryId;
  title: string;
}

export interface IFilterContext {
  id: CategoryId;
  changeId: (id: CategoryId) => void;
}