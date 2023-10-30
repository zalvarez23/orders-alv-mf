import type { Meta, StoryObj } from "@storybook/react";
import MenuHeader from "./menu-header";

const meta = {
  title: "ui/templates/MenuHeader",
  component: MenuHeader,
  parameters: {
    layout: "full",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MenuHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "",
  },
};
