export function incrementPage(page, totalPages, setPage) {
  console.log(page, totalPages)
  if (page < totalPages) {
    setPage(page + 1)
  }
}

export function decrementPage(page, setPage) {
  if (page > 1) {
    console.log('decr')
    setPage(page - 1)
  }
}