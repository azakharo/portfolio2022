import { TFunction } from 'react-i18next';

export const getLabel = (
  t: TFunction,
  labelKey?: string,
  label?: string,
): string => {
  if (labelKey) {
    return t(labelKey);
  }

  if (label) {
    return label;
  }

  return '';
};
