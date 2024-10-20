/**
 * Given a search string and a query,
 * returns all of the indices for the query
 */
export function indexOfAll(searchString: string, query: string) {
  const out: number[] = [];

  let start = 0;
  let found = 0;
  while (found !== -1) {
    found = searchString.indexOf(query, start);

    if (found !== -1) {
      out.push(found);
      start = found + 1;
    }
  }

  return out;
}
