export const editComponent = (elementEditable) => {
  elementEditable.current.contentEditable = true;
  elementEditable.current.focus();
};