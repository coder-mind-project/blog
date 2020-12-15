import {
  shape,
  string,
  oneOfType,
} from 'prop-types';

import {themeType} from './theme';
import {categoryType} from './category';


export const articleType = shape({
  title: string,
  description: string,
  state: string,
  logoImg: string,
  secondaryImg: string,
  headerImg: string,
  contentType: string,
  content: string,
  relatedVideoType: string,
  relatedVideo: string,
  relatedRepositoryType: string,
  relatedRepository: string,
  uri: string,
  publishedAt: oneOfType([Date, string]),
  theme: oneOfType([themeType]),
  category: oneOfType([categoryType]),
});

export default {articleType};
