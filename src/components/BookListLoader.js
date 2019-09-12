import React from 'react';
import ContentLoader from 'react-content-loader';

const BookListLoader = () => {
  return (
    <div>
      <ContentLoader 
        height={550}
        width={600}
        speed={2}
        primaryColor="#ededed"
        secondaryColor="#dfdfdf"
      >
        <rect x="4" y="6" rx="3" ry="3" width="541" height="20" /> 
        <rect x="4" y="32" rx="3" ry="3" width="261" height="15" /> 
        <rect x="4" y="75" rx="3" ry="3" width="501" height="20" /> 
        <rect x="4" y="147" rx="3" ry="3" width="521" height="20" /> 
        <rect x="4" y="218" rx="3" ry="3" width="461" height="20" /> 
        <rect x="4" y="289" rx="3" ry="3" width="541" height="20" /> 
        <rect x="4" y="358" rx="3" ry="3" width="521" height="20" /> 
        <rect x="4" y="427" rx="3" ry="3" width="541" height="20" /> 
        <rect x="4" y="496" rx="3" ry="3" width="481" height="20" /> 
        <rect x="4" y="101" rx="3" ry="3" width="369" height="15" /> 
        <rect x="4" y="173" rx="3" ry="3" width="291" height="15" /> 
        <rect x="4" y="244" rx="3" ry="3" width="331" height="15" /> 
        <rect x="4" y="315" rx="3" ry="3" width="241" height="15" /> 
        <rect x="4" y="384" rx="3" ry="3" width="371" height="15" /> 
        <rect x="4" y="453" rx="3" ry="3" width="291" height="15" /> 
        <rect x="4" y="522" rx="3" ry="3" width="341" height="15" />
      </ContentLoader>
    </div>
  )
}

export default BookListLoader;