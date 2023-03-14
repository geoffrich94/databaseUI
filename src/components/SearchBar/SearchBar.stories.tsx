import { ComponentMeta } from '@storybook/react';
import { SearchBar } from './SearchBar';

export default {
  title: 'Atoms',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

export const SearchBar_ = () => (
  <SearchBar />
);

