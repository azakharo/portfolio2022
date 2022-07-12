export const limitString = (
  str: string,
  maxLength: number,
  fromEnd?: number,
): string => {
  if (!str) {
    return '';
  }

  if (str.length <= maxLength) {
    return str;
  }

  if (fromEnd) {
    return `...${str.slice(str.length - maxLength)}`;
  }

  return `${str.slice(0, Math.max(0, maxLength - 3))}...`;
};

export const compareIgnoringCase = (str1: string, str2: string): boolean =>
  str1.toLowerCase() === str2.toLowerCase();
