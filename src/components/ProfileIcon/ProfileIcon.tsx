import * as S from './ProfileIcon.styles';

interface ProfileIconProps {
  text: string;
  className?: string;
};

export const ProfileIcon: React.FC<ProfileIconProps> = ({ text, className }) => {
  return (
    <S.Container className={className}>
      {text}
    </S.Container>
  )
}
