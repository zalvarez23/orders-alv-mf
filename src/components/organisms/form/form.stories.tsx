import type { Meta, StoryObj } from "@storybook/react";
import Form from "./form";

const meta = {
  title: "ui/organisms/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    negocio: 'Negocio',
    tipo: 'Gym, Restautant, Retail, Nigth-Vlub',
  },
};
