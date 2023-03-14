import { ComponentMeta } from "@storybook/react";
import { UserCard } from "./UserCard";
import { UserCardList } from "./UserCardList";

export default {
  title: "Organisms",
  component: UserCardList,
} as ComponentMeta<typeof UserCardList>;

export const UserCardList_ = () => (
  <UserCardList>
    <UserCard iconText="JD" fullName="John Doe" jobTitle="Developer" />
    <UserCard iconText="JD" fullName="John Doe" jobTitle="Developer" />
    <UserCard iconText="JD" fullName="John Doe" jobTitle="Developer" />
    <UserCard iconText="JD" fullName="John Doe" jobTitle="Developer" />
    <UserCard iconText="JD" fullName="John Doe" jobTitle="Developer" />
    <UserCard iconText="JD" fullName="John Doe" jobTitle="Developer" />
    <UserCard iconText="JD" fullName="John Doe" jobTitle="Developer" />
    <UserCard iconText="JD" fullName="John Doe" jobTitle="Developer" />
  </UserCardList>
);
