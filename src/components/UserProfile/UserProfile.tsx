import * as S from "./UserProfile.styles";

interface UserProfileProps {
  fullName?: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({ fullName }) => {
  return (
    <S.Container>
      <S.ProfileIcon text={`${fullName?.[0]}`} />
      <S.Heading>{fullName}</S.Heading>
      <S.SubHeading>Developer</S.SubHeading>
    </S.Container>
  );
};
