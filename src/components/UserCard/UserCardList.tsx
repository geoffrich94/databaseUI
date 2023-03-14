import * as S from './UserCardList.styles';

interface UserCardListProps {
  children: React.ReactNode;
}

export const UserCardList: React.FC<UserCardListProps> = ({ children }) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  )
}
