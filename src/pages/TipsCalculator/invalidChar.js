export const blockInvalidChar = (e) =>
  ['i', 'e', 'E', '+', '-', '.', ',', '='].includes(e.key) &&
  e.preventDefault();
