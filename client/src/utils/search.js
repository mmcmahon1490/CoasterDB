const handleSearch = (item, arr) => {
  const queryResult = arr.filter(coaster => coaster.name.toLowerCase().includes(item.toLowerCase()))
  return(queryResult)
}

export default handleSearch;