// import { useState } from 'react'

import { useState } from 'react';
import UseGetAllposts from '../../CustomHooks/UseGetAllposts';
import UseGetAllTags from '../../CustomHooks/UseGetAllTags';
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

