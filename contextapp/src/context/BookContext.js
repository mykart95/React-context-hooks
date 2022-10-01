import React, { useState, createContext } from 'react';

export const BookContext= createContext();

const BookContextProvider = (props) => {
  const [books, setBooks]  =useState([
        {title:'eldorado',id: 1},
        {title:'Kgf',id: 2},
        {title:'RRR',id: 3},
        {title:'Charlie',id: 4}
    ])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;