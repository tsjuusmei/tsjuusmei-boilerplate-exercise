export const truncateString = (str: string, max: number) => (
  str.length >= max
    ? (
      `${
        str
          .substring(0, max)
          .trim()
          .replace(/([&])$/, '')
          .trim()}...`
    ) : (
      str
    )
)
