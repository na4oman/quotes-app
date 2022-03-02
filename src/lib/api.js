export const transformedData = data => {
  const loadedData = []

  for (const key in data) {
    const dataObj = {
      id: key,
      ...data[key],
    }

    loadedData.push(dataObj)
  }

  return loadedData
}
