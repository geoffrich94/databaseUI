import { Sidebar, UserCard, UserCardList, Dropdown } from "components";
import { useState } from "react";
import * as S from "./Users.styles";

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

interface UsersProps {
  users: User[];
}

interface SelectedUser {
  id: string;
  fullName: string;
  location: string;
  email: string;
  cell: string;
}

export const Users: React.FC<UsersProps> = ({ users }) => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<SelectedUser>({
    id: "",
    fullName: "",
    location: "",
    email: "",
    cell: "",
  });

  const handleSidebar = (
    id: string,
    fullName: string,
    cell: string,
    email: string,
    location: string
  ) => {
    setSelectedUser((previousUser) => {
      if (previousUser?.id === id && sidebarOpen) {
        setSideBarOpen(false);
        return previousUser;
      } else if (previousUser?.id === id && !sidebarOpen) {
        setSideBarOpen(true);
        return previousUser;
      } else {
        setSideBarOpen(true);
        return { id, fullName, location, email, cell };
      }
    });
  };

  return (
    <S.Container>
      <S.UsersContent>
        <S.Heading>Users</S.Heading>
        <S.Paragraph>
          If you want to get contact information to specific users, select a
          group and then select them from the list below
        </S.Paragraph>
        <Dropdown />
        <UserCardList>
          {users.map((user, idx) => {
            return (
              <UserCard
                key={idx}
                id={user.id.name}
                location={user.location.city}
                email={user.email}
                cell={user.cell}
                handleClick={handleSidebar}
                iconText={`${user.name.first[0]} ${user.name.last[0]}`}
                fullName={`${user.name.first} ${user.name.last}`}
                jobTitle="Developer"
              />
            );
          })}
        </UserCardList>
      </S.UsersContent>
      <Sidebar isOpen={sidebarOpen} {...selectedUser} />
    </S.Container>
  );
};
