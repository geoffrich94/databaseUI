import { ComponentMeta } from '@storybook/react';
import { UserProfile } from './UserProfile';

export default {
  title: 'Molecules',
  component: UserProfile,
} as ComponentMeta<typeof UserProfile>;

export const UserProfile_ = () => (
  <UserProfile />
);

