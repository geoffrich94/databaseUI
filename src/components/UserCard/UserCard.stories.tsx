import { ComponentMeta } from "@storybook/react";
import { UserCard } from "./UserCard";

export default {
  title: "Molecules",
  component: UserCard,
} as ComponentMeta<typeof UserCard>;

export const UserCard_ = () => (
  <UserCard iconText="JD" fullName="John Doe" jobTitle="Developer" />
);
