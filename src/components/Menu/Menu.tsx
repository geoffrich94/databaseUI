import { Button, ButtonList, ProfileIcon } from "components";
import * as S from "./Menu.styles";

interface MenuProps {
  isOpen: boolean;
  toggleBar?: boolean;
  onClick?: () => void;
}

export const Menu: React.FC<MenuProps> = ({ isOpen, toggleBar, onClick }) => {
  const menuButtons = [
    {
      buttontext: "Home",
      buttonIcon: "/assets/home.svg",
    },
    {
      buttontext: "Blog",
      buttonIcon: "/assets/blog.svg",
    },
    {
      buttontext: "Community",
      buttonIcon: "/assets/community.svg",
    },
    {
      buttontext: "Contest",
      buttonIcon: "/assets/contest.svg",
    },
    {
      buttontext: "About",
      buttonIcon: "/assets/about.svg",
    },
    {
      buttontext: "Contact",
      buttonIcon: "/assets/contact.svg",
    },
  ];

  return (
    <S.Container isOpen={isOpen}>
      <S.HamburgerMenu toggleBar={toggleBar} onClick={onClick} />

      <ProfileIcon text="NT" />

      <S.HeadingContainer>
        <S.Heading>Nicola Turco</S.Heading>
        <S.SubHeading>Developer</S.SubHeading>
      </S.HeadingContainer>

      <ButtonList>
        {menuButtons.map((button, idx) => {
          return (
            <Button
              key={idx}
              buttonText={button.buttontext}
              buttonIcon={button.buttonIcon}
            />
          );
        })}
      </ButtonList>
    </S.Container>
  );
};
