import { arr } from "./productList"

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

export function getPaginatedItems(p) {
  const offset = p?.offset || 0;
  const limit = p?.limit || 20;

  const allData = arr.filter(item => {
    if (p?.query && item.title.toLowerCase().includes(p.query.toLowerCase())) {
      return item;
    }
    if (!p?.query) {
      return item;
    }
  });

  const slicedData = allData.slice(offset, offset + limit);

  return {
    totalLength: allData.length,
    data: slicedData
  }

}

export function getItemById(id) {
  if (typeof id === 'string') id = Number(id)
  return arr.filter(item => item.id === id).shift()
}
