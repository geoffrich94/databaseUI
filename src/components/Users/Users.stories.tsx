import { ComponentMeta } from '@storybook/react';
import { Users } from './Users';

export default {
  title: 'Organisms',
  component: Users,
} as ComponentMeta<typeof Users>;

export const Users_ = () => (
  <Users users={[]} />
);

