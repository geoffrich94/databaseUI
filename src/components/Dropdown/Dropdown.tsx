import * as S from './Dropdown.styles';

export const Dropdown = () => {
  return (
    <S.Container>
      <S.Text>Select group of users</S.Text>
      <S.Select name="Users" >
        <option value="Developers">Developers</option>
        <option value="Designers">Designers</option>
      </S.Select>
    </S.Container>
  )
}
