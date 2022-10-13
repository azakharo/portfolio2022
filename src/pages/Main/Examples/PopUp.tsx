import React, { FC, memo, useCallback } from 'react';
import { DialogContent, Dialog } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { create, InstanceProps } from 'react-modal-promise';

import { ExampleData } from 'src/pages/Main/Examples/config';
import { DefaultResolveFuncType } from 'src/components/Dialogs/types';
import DialogTitle from 'src/components/Dialogs/DialogTitle';

// const useStyles = makeStyles(() => ({
//   img: {
//     width: '100%',
//   },
// }));

interface Props extends InstanceProps<DefaultResolveFuncType> {
  data: ExampleData;
}

const PopUp: FC<Props> = ({ data, onReject }) => {
  const [t] = useTranslation();
  // const classes = useStyles();
  const { nameKey } = data;

  const handleClose = useCallback(() => {
    onReject();
  }, [onReject]);

  return (
    <Dialog open onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle title={t(nameKey)} onClose={handleClose} />

      <DialogContent>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </DialogContent>
    </Dialog>
  );
};

export default create(memo(PopUp));
