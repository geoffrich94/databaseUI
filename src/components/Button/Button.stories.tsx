import { ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Atoms',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Button_ = () => (
  <Button buttonText='Blog' buttonIcon='/assets/blog.svg' />
);

