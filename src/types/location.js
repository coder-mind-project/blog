import {
  shape,
  string,
} from 'prop-types';


export const locationType = shape({
  pathName: string,
  search: string,
});

export default {locationType};

