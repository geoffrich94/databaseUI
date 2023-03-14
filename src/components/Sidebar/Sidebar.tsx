import { UserProfile } from "components";
import * as S from "./Sidebar.styles";

interface SideBarProps {
  isOpen: boolean;
  fullName: string;
  location: string;
  cell: string;
  email: string;
}

export const Sidebar: React.FC<SideBarProps> = ({
  fullName,
  isOpen,
  location,
  cell,
  email,
}) => {
  return (
    <S.Container isOpen={isOpen}>
      <UserProfile fullName={fullName} />
      <S.SidebarContent>
        <S.TextContainer>
          <S.Heading>City</S.Heading>
          <S.Text>{location}</S.Text>
        </S.TextContainer>
        <S.TextContainer>
          <S.Heading>Cell</S.Heading>
          <S.Text>{cell}</S.Text>
        </S.TextContainer>
        <S.TextContainer>
          <S.Heading>Email</S.Heading>
          <S.Text>{email}</S.Text>
        </S.TextContainer>
      </S.SidebarContent>
    </S.Container>
  );
};
