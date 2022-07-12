import React, { useRef, useState, memo, FC, ComponentType } from 'react';
import {
  ListItemIcon,
  ListItemText,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import { useTranslation } from 'react-i18next';

export interface MoreButtonAction {
  label?: string;
  labelKey?: string;
  icon: ComponentType;
  onClick: () => void;
  disabled?: boolean;
  testId?: string;
}

interface Props {
  actions?: MoreButtonAction[];
  testId?: string;
}

const MoreButton: FC<Props> = ({ actions, testId }: Props) => {
  const [t] = useTranslation();
  const moreRef = useRef(null);

  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(true);
  };
  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <IconButton
        onClick={handleMenuOpen}
        ref={moreRef}
        color="inherit"
        data-testid={testId}
      >
        <MoreIcon fontSize="small" />
      </IconButton>
      {actions && (
        <Menu
          anchorEl={moreRef.current}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          onClose={handleMenuClose}
          open={openMenu}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {actions.map(
            ({
              label,
              labelKey,
              icon: Icon,
              onClick,
              disabled,
              testId: actionTestId,
            }) => (
              <MenuItem
                disabled={disabled}
                onClick={() => {
                  handleMenuClose();
                  onClick();
                }}
                key={labelKey || label}
                data-testid={actionTestId}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={labelKey ? t(labelKey) : label} />
              </MenuItem>
            ),
          )}
        </Menu>
      )}
    </>
  );
};

export default memo(MoreButton);
