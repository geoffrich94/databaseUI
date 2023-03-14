import * as S from './SearchBar.styles';
import { useState } from 'react';

interface SearchBarProps {
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {

  return (
    <S.SearchBar>
      <img src='/assets/search.svg' />
      <input type="text" placeholder="Search..." onChange={onChange} />
    </S.SearchBar>
  )
}
