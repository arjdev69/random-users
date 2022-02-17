export const scrollToBottom = (id: string) => {
  const scrollBox = document.getElementById(id);
  scrollBox.scrollTop = scrollBox.scrollHeight - scrollBox.clientHeight;
}

export const filterData = (items, val) => {
  let searchedItems = items.filter((item) => {
    return Object.keys(item).some((key) => {
      return String(item[key]).toLowerCase().indexOf(val.toLowerCase()) > -1;
    });
  });

  return searchedItems;
};