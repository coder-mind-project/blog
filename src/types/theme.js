import {
  shape,
  string,
} from 'prop-types';


export const themeType = shape({
  id: string,
  alias: string,
  description: string,
  longDescription: string,
});

export default {themeType};
