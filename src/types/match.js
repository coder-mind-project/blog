import {
  shape,
  string,
} from 'prop-types';


export const matchType = shape({
  params: shape({
    resource: string,
  }),
});

export default {matchType};

