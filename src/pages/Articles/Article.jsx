import React, {useState, useEffect} from 'react';
import {matchType} from '../../types';
import {Grid} from '@material-ui/core';

import axios from 'axios';

import ArticlePlaceholder from './placeholders/ArticlePlaceholder';
import ErrorResult from './ErrorResult';
import FloatingButton from '../../components/FloatingButton.jsx';
import ArticleHeader from './ArticleHeader';
import ArticleContent from './ArticleContent';
import ArticleComments from './ArticleComments';
import ArticleFooter from './ArticleFooter';

import {ArticleContainer, ArticleTextContentErrorResultContainer} from './styles';

const Article = (props) => {
  const {match} = props;
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [load, setLoad] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const get = async () => {
      const {resource} = match.params;

      const url = `/articles/${resource}`;
      setIsLoading(true);
      await axios(url).then((response) => {
        const {data} = response;
        setArticle({...data, publishedAt: new Date(data.publishedAt)});
        setIsError(false);
      }).catch(() => setIsError(true));
      setIsLoading(false);
    };

    if (load) {
      setLoad(false);
      get();
    }
  }, [article, isLoading, load, match.params, isError]);

  return (
    <ArticleContainer>
      { isLoading &&
        <ArticleContainer>
          <ArticlePlaceholder />
        </ArticleContainer>
      }
      { !isLoading && !isError &&
        <Grid item xs={12} className="article-content">
          <ArticleHeader article={article}/>
          <ArticleContent article={article} />
          <ArticleFooter />
          <ArticleComments />
        </Grid>
      }
      { isError &&
        <ArticleTextContentErrorResultContainer>
          <ErrorResult visible={isError} message="Ops, parece que ocorreu um erro inesperado, tente atualizar a página, se persistir reporte"/>
        </ArticleTextContentErrorResultContainer>
      }
      <FloatingButton action={() => window.scrollTo(0, 0)}/>
    </ArticleContainer>
  );
};

Article.propTypes = {
  match: matchType.isRequired,
};

export default Article;
