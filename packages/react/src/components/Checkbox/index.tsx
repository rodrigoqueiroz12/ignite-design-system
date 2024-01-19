import { ComponentProps } from 'react'
import { CheckboxContainer, CheckboxIndicator } from './styles'
import { Check } from '@phosphor-icons/react'

export type CheckboxProps = ComponentProps<typeof CheckboxContainer>

export const Checkbox = (props: CheckboxProps) => (
  <CheckboxContainer {...props}>
    <CheckboxIndicator asChild>
      <Check weight="bold" />
    </CheckboxIndicator>
  </CheckboxContainer>
)

Checkbox.displayName = 'Checkbox'
