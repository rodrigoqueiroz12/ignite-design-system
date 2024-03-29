import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => (
      <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
        <Text size="sm" as="label">
          Describe yourself
        </Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type a little bit of you :D',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
