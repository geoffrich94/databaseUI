import { ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';

export default {
  title: 'Atoms',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

export const Dropdown_ = () => (
  <Dropdown />
);
