import { Sidebar, UserCard, UserCardList, Dropdown } from "components";
import { useState } from "react";
import * as S from "./Users.styles";

interface UsersProps {
  users: any[];
}

export const Users: React.FC<UsersProps> = ({ users }) => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    fullName: "",
    location: "",
    email: "",
    cell: "",
  });

  const handleSidebar = (
    fullName: string,
    cell: string,
    email: string,
    location: string
  ) => {
    setSelectedUser({
      fullName,
      location,
      email,
      cell,
    });
    if (sidebarOpen) {
      setSideBarOpen(false);
    } else {
      setSideBarOpen(true);
    }
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
