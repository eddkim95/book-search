import React from 'react';

const PageSearch = (props) => {
  const {
    pages,
    cachedPages,
    updateSearch,
    useCache,
  } = props;
  
  const pageDropDown = new Array(pages).fill(null).map((_,i) => {
    return <option key={i} value={i+1}>{i+1}</option>
  })

  return (
    <div>
      Page: <span><select onChange={(e) => {
        const newPage = e.target.value;
        if (cachedPages[newPage]) useCache(newPage)
        else updateSearch(newPage)
        }}>
        {pageDropDown}
      </select></span> of {pages}
    </div>
  )
}

export default PageSearch;