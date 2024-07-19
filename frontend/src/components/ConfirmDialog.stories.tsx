import type { Meta, StoryObj } from "@storybook/react"

import ConfirmDialog from "./ConfirmDialog"

const meta: Meta<typeof ConfirmDialog> = {
  component: ConfirmDialog,
}

export default meta
type Story = StoryObj<typeof ConfirmDialog>

export const Primary: Story = {
  args: {
    isVisible: true,
    prompt: "Are you sure?",
    description: "This action cannot be undone.",
    action: "Yes, delete",
    onConfirmed: () => {
      console.log("Confirmed")
    },
    onCancelled: () => {
      console.log("Cancelled")
    },
  },
}
