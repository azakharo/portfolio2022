export const getArrayItemIf = <T>(
  item: T | (() => T),
  condition: boolean | (() => boolean),
): T[] => {
  const conditionResult =
    typeof condition === 'function' ? condition() : !!condition;
  if (conditionResult) {
    return typeof item === 'function' ? [(item as () => T)()] : [item];
  }

  return [];
};

// This function mutates the passed array!
// The orderArray MUST be an array of primitive values
export const sortArrayByAnotherArray = <T, K>(
  array2sort: Array<T>,
  orderArray: Array<K>,
  getItemValue: (item: T) => K,
): Array<T> =>
  array2sort.sort(
    (a, b) =>
      orderArray.indexOf(getItemValue(a)) - orderArray.indexOf(getItemValue(b)),
  );
