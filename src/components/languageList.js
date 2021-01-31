import React from 'react';

const LanguageList = ({LanguageList=[]}) => {

  return (
    <>
    { LanguageList.map((data,index) => {
        if (data) {
          return (
            <div key={data}>
            <h1>{data}</h1>
	    </div>
    	   )
    	 }
    	 return null
    }) }
    </>
  );
}

export default LanguageList
