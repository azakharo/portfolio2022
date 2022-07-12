import { FC, memo } from 'react';
import { TOptions } from 'i18next';
import { useTranslation } from 'react-i18next';

interface Props {
  transKey: string;
  transOptions?: TOptions;
}

const Text: FC<Props> = ({ transKey, transOptions }) => {
  const [t] = useTranslation();

  return t(transKey, transOptions);
};

export default memo(Text);
