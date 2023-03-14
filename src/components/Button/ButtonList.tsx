import * as S from './ButtonList.styles';

interface ButtonListProps {
  children: React.ReactNode;
}

export const ButtonList: React.FC<ButtonListProps> = ({ children }) => {
  return (
    <S.Container>{children}</S.Container>
  )
};
