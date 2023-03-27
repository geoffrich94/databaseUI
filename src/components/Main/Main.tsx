import { Toolbar, Users } from "components";
import { useEffect, useState } from "react";
import * as S from "./Main.styles";

interface User {
  id: {
    name: string;
  };
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
  };
  email: string;
  cell: string;
}

interface Users {
  users: User[];
}

export const Main = () => {
  const [searchUser, setSearchUser] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [results, setResults] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://randomuser.me/api/?results=8");
      const data = await res.json();
      setResults(data.results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleFilter = () => {
      const updatedUsers = results.filter((result) => {
        if (searchUser === "") {
          return result;
        } else if (
          result.name.first.toLowerCase().includes(searchUser.toLowerCase())
        ) {
          return result;
        }
      });
      setFilteredUsers(updatedUsers);
    };
    handleFilter();
    console.log(results);
  }, [searchUser, results]);

  return (
    <S.Container>
      <Toolbar
        onChange={(event) => {
          setSearchUser((event.target as HTMLInputElement).value);
        }}
      />
      <Users users={filteredUsers} />
    </S.Container>
  );
};
