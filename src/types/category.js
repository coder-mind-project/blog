import {
  shape,
  string,
} from 'prop-types';

import {themeType} from './theme';

export const categoryType = shape({
  id: string,
  alias: string,
  description: string,
  longDescription: string,
  theme: themeType,
});

export default {categoryType};
