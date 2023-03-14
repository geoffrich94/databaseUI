import * as S from './Button.styles';

interface ButtonProps {
  buttonText: string;
  buttonIcon?: string;
};

export const Button: React.FC<ButtonProps> = ({ buttonText, buttonIcon }) => {
  return (
    <S.Container>
      <S.Image src={buttonIcon} />
      {buttonText}
    </S.Container>
  )
}
