import { Toolbar, Users, SearchBar } from 'components'
import { useEffect, useState } from 'react';
import * as S from './Main.styles'

export const Main = () => {

  const [searchUser, setSearchUser] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://randomuser.me/api/?results=8');
      const data = await res.json();
      setResults(data.results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleFilter = () => {
      const updatedUsers = results.filter((result) => {
        if (searchUser === "") {
          return result
        } else if (result.name.first.toLowerCase().includes(searchUser.toLowerCase())) {
          return result
        }
      });
      setFilteredUsers(updatedUsers);
    };
    handleFilter();
    console.log(results);
  }, [searchUser, results]);

  return (
    <S.Container>
      <Toolbar onChange={(event) => { setSearchUser(event.target.value) }} />
      <Users users={filteredUsers} />
    </S.Container>
  )
};