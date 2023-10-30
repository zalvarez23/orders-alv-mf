import type { Meta, StoryObj } from "@storybook/react";
import UserRank from "./user-rank";

const meta = {
  title: "ui/molecules/UserRank",
  component: UserRank,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UserRank>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rank:"gold",
    label: "gold",
    family : "bold",
    labelSpacing : "normal",
    variant :"body",
  },
};