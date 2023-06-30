export const elemMapper = (elemArray, elems, prefix, method) => {
  return elemArray.map((el) =>
    method === 'id' ? elems.getElementById(`${prefix}${el}`) : elems.querySelectorAll(`${prefix}${el}`),
  );
};
