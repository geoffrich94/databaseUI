import * as S from "./HamburgerMenu.styles";

interface HamburgerMenuProps {
  className?: string;
  onClick?: () => void;
  toggleBar?: boolean;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  className,
  onClick,
  toggleBar,
}) => {
  return (
    <S.Container className={className} onClick={onClick} toggleBar={toggleBar}>
      <S.Panel />
      <S.Panel />
      <S.Panel />
    </S.Container>
  );
};
