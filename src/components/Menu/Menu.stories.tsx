import { ComponentMeta } from "@storybook/react";
import { Menu } from "./Menu";

export default {
  title: "Organisms",
  component: Menu,
} as ComponentMeta<typeof Menu>;

export const Menu_ = () => <Menu isOpen />;
