export const filterUndefined = (targetObject: Record<string, any>) => {
  const resultObject: Record<string, any> = {}

  for (const key in targetObject) {
    if (targetObject[key] !== undefined) {
      resultObject[key] = targetObject[key]
    }
  }

  return resultObject
}
