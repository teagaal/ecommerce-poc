export function formatSize(size) {
  const newSize = size / 1000
  return `${newSize} MB`
}

export function paginateData(data, perPage) {
  return new Array(Math.ceil(data.length / perPage))
    .fill()
    .map(() => data.splice(0, perPage))
}
