import { ComponentMeta } from '@storybook/react';
import { ProfileIcon } from './ProfileIcon';

export default {
  title: 'Atoms',
  component: ProfileIcon,
} as ComponentMeta<typeof ProfileIcon>;

export const ProfileIcon_ = () => (
  <ProfileIcon text='NT' />
);

