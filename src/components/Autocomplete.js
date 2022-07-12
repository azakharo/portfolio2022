import React, { memo, useState, useCallback } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete as BaseAutocomplete } from '@material-ui/lab';
import { useTranslation } from 'react-i18next';

import { getLabel } from '../i18n/utils';

// Autocomplete.propTypes = {
//   name: PropTypes.string,
//   options: PropTypes.arrayOf(PropTypes.object),
//   value: PropTypes.any,
//   onChange: PropTypes.func.isRequired,
//   inputLabelKey: PropTypes.string,
//   inputLabel: PropTypes.string,
//   inputPlaceholderKey: PropTypes.string,
//   inputPlaceholder: PropTypes.string,
//   inputAdditionalProps: PropTypes.shape({}),
//   multiple: PropTypes.bool,
//   freeSolo: PropTypes.bool,
//   getOptionLabel: PropTypes.func,
// };

const Autocomplete = ({
  name,
  options,
  value,
  onChange,
  inputLabelKey,
  inputLabel,
  inputPlaceholderKey,
  inputPlaceholder,
  inputAdditionalProps,
  multiple,
  freeSolo,
  getOptionLabel,
  ...restProps
}) => {
  const [t] = useTranslation();

  const [inputValue, setInputValue] = useState('');

  const ownHandleChange = useCallback(
    (event, newValue) => {
      onChange({
        target: {
          name,
          value: newValue,
        },
      });
    },
    [name, onChange],
  );

  const handleInputChange = (event, newInputValue) => {
    if (!multiple || !freeSolo) {
      setInputValue(newInputValue);
      return;
    }

    const opts = newInputValue.split(/[ ,;]+/);
    if (opts.length > 1) {
      const fieldValue = value
        .concat(opts)
        .map(x => x.trim())
        .filter(x => x);

      ownHandleChange(event, fieldValue);
    } else {
      setInputValue(newInputValue);
    }
  };

  const renderInput = useCallback(
    params => (
      <TextField
        {...params}
        variant="outlined"
        label={getLabel(t, inputLabelKey, inputLabel)}
        placeholder={getLabel(t, inputPlaceholderKey, inputPlaceholder)}
        {...inputAdditionalProps}
      />
    ),
    [
      t,
      inputLabel,
      inputLabelKey,
      inputPlaceholder,
      inputPlaceholderKey,
      inputAdditionalProps,
    ],
  );

  const defaultGetOptionLabel = useCallback(
    opt => {
      const { label, labelKey } = opt;

      if (labelKey) {
        return t(labelKey);
      }

      return label || opt;
    },
    [t],
  );

  return (
    <BaseAutocomplete
      value={value}
      onChange={ownHandleChange}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      renderInput={renderInput}
      multiple={multiple}
      freeSolo={freeSolo}
      noOptionsText={t('autocomplete__noOptionsText')}
      loadingText={t('loadingMessage')}
      options={options || []}
      getOptionLabel={getOptionLabel || defaultGetOptionLabel}
      {...restProps}
    />
  );
};

export default memo(Autocomplete);
