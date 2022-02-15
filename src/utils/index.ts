export const scrollToBottom = (id: string) => {
  const scrollBox = document.getElementById(id);
  scrollBox.scrollTop = scrollBox.scrollHeight - scrollBox.clientHeight;
}