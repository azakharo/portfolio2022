import { createBrowserHistory } from 'history';

import { publicPath } from './routing';

const history = createBrowserHistory({
  basename: publicPath,
});

export default history;
