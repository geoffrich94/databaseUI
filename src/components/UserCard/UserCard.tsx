import { ProfileIcon } from "components";
import * as S from "./UserCard.styles";

interface UserCardProps {
  handleClick?: (
    fullName: string,
    cell: string,
    email: string,
    location: string
  ) => void;
  iconText: string;
  fullName: string;
  jobTitle: string;
  location?: string;
  cell?: string;
  email?: string;
}

export const UserCard: React.FC<UserCardProps> = ({
  handleClick,
  iconText,
  fullName,
  jobTitle,
  location,
  cell,
  email,
}) => {
  return (
    <S.Container
      onClick={() => {
        handleClick?.(fullName || "", cell || "", email || "", location || "");
      }}
    >
      <ProfileIcon text={iconText} />
      <S.TextContainer>
        <S.Name>{fullName}</S.Name>
        <S.JobTitle>{jobTitle}</S.JobTitle>
      </S.TextContainer>
    </S.Container>
  );
};
