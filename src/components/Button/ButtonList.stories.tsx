import { ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import { ButtonList } from './ButtonList';

export default {
  title: 'Molecules',
  component: ButtonList,
} as ComponentMeta<typeof ButtonList>;

export const ButtonList_ = () => (
  <ButtonList>
    <Button buttonText='Blog' buttonIcon='/assets/blog.svg' />
    <Button buttonText='Blog' buttonIcon='/assets/blog.svg' />
    <Button buttonText='Blog' buttonIcon='/assets/blog.svg' />
    <Button buttonText='Blog' buttonIcon='/assets/blog.svg' />
    <Button buttonText='Blog' buttonIcon='/assets/blog.svg' />
  </ButtonList>
);

