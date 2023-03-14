import * as S from './Toolbar.styles'
import { SearchBar } from 'components';

interface ToolbarProps {
  onChange?: (event: any) => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({ onChange }) => {
  return (
    <S.Container>
      <SearchBar onChange={onChange} />
      <img src='assets/settings.svg' />
    </S.Container>
  )
}
