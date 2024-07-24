// import { useState } from 'react'

import { useState } from 'react';
import UseGetAllposts from '../../CsutomHooks/UseGetAllposts';
import UseGetAllTags from '../../CsutomHooks/UseGetAllTags';
import { ApiContext } from './ApiContext'
import PropTypes from 'prop-types';

export const ApiContextProvider = ({ children }) => {
  const [currentIdPost, setCurrentIdPost] = useState(null)

  const allPosts = UseGetAllposts();
  const tags = UseGetAllTags();

  return (
    <ApiContext.Provider value={{ allPosts, currentIdPost, setCurrentIdPost, tags }}>
      {children}
    </ApiContext.Provider>
  )
}

ApiContextProvider.propTypes = {
  children: PropTypes.node,
};

