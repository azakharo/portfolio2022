import React, { FC, memo, useCallback } from 'react';
import { Box, MenuItem, Select } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { supportedLanguages } from 'src/i18n/supportedLanguages';
import { ILanguage } from 'src/types/language';
import { flags } from 'src/assets/flags';

interface Props {
  className?: string;
}

const renderValue = (value: unknown) => {
  const langCode = value as string;

  const langData = supportedLanguages.find(lng => lng.code === langCode);

  if (!langData) {
    return langCode;
  }

  return (
    <Box display="flex">
      <Box mr={1}>
        <img src={flags[langData.icon]} alt={`${langData.label} flag`} />
      </Box>
      <span>{langData.label}</span>
    </Box>
  );
};

const CurrentLanguageSelect: FC<Props> = ({ className }) => {
  const [, i18n] = useTranslation();
  const curLang = i18n.language;

  const handleChange = useCallback(
    async e => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const newLang = e?.target?.value as string;
      await i18n.changeLanguage(newLang);
    },
    [i18n],
  );

  return (
    <Select
      value={curLang || ''}
      onChange={handleChange}
      className={className}
      renderValue={renderValue}
    >
      {supportedLanguages.length > 0 &&
        supportedLanguages.map((lang: ILanguage) => (
          <MenuItem key={lang.code} value={lang.code}>
            <Box display="flex" alignItems="center" gridGap={5}>
              <img src={flags[lang.icon]} alt="flag" />
              <span>{lang.label}</span>
            </Box>
          </MenuItem>
        ))}
    </Select>
  );
};

export default memo(CurrentLanguageSelect);
