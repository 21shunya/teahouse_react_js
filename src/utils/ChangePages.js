export function incrementPage(page, totalPages, setPage) {
  if (page < totalPages) {
    setPage(page + 1)
  }
}

export function decrementPage(page, setPage) {
  if (page > 1) {
    setPage(page - 1)
  }
}

export function getPageItems(itemList, limit, page) {
  let pageItems = []
  for (let i = (page - 1) * limit; i < page * limit; i++) {
    if( i < itemList.length) pageItems.push(itemList[i])
 }
 return pageItems
}