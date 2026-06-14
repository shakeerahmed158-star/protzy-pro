export function createQueryString(
  params: Record<string, any>
) {
  return new URLSearchParams(
    Object.entries(params).reduce(
      (acc, [key, value]) => {
        acc[key] =
          typeof value === "object"
            ? JSON.stringify(value)
            : String(value);

        return acc;
      },
      {} as Record<string, string>
    )
  ).toString();
}