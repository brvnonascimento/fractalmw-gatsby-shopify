export const missingParamError = (shirtId: string, param: string) => {
  throw new Error(
    `Shirt with id ${shirtId} does not contain a valid ${param} parameter.`
  )
}
