const getPublicPath = (): string => {
  let publicPath = process.env.PUBLIC_URL;

  if (!publicPath) {
    return '';
  }

  // public path must not end with /
  if (publicPath !== '/') {
    publicPath = publicPath.replace(/\/$/, '');
  }

  return publicPath;
};

export const publicPath = getPublicPath();
