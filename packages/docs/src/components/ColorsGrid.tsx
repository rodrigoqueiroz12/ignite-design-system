import { colors } from '@ignite-ui/tokens'

import { ColorItem, ColorPalette } from '@storybook/blocks'

export default function ColorsGrid() {
  return (
    <ColorPalette>
      <ColorItem
        title="White"
        subtitle="Basic white color"
        colors={{ White: colors.white }}
      />
      <ColorItem
        title="Black"
        subtitle="Basic black color"
        colors={{ Black: colors.black }}
      />
      <ColorItem
        title="Gray"
        subtitle="Gray colors"
        colors={{
          100: colors.gray100,
          200: colors.gray200,
          400: colors.gray400,
          500: colors.gray500,
          600: colors.gray600,
          700: colors.gray700,
          800: colors.gray800,
          900: colors.gray900,
        }}
      />
      <ColorItem
        title="Ignite"
        subtitle="Ignite colors"
        colors={{
          300: colors.ignite300,
          500: colors.ignite500,
          700: colors.ignite700,
          900: colors.ignite900,
        }}
      />
    </ColorPalette>
  )
}
