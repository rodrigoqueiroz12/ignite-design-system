interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue: boolean
}

export default function TokensGrid({ tokens, hasRemValue }: TokensGridProps) {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            {hasRemValue && <td>{+value.replace('rem', '') * 16}px</td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
