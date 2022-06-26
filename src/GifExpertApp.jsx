import React from 'react'
import {useState} from 'react';
import {AddCategory, GifGrid} from './components'


export const GifExpertApp = () => {
    
  const [categories, setCategories] = useState(['The Office']);

  
  const onAddCategory=(newCategory)=> {
     const lowerUpperCategories = [newCategory, newCategory.toLowerCase(), newCategory.toUpperCase()];
    if(categories.some((el) => lowerUpperCategories.includes(el) )) return;
  //Forma 1 de hacerlo
  setCategories([newCategory, ...categories]);
  // setCategories(cat => [...cat, 'Naruto']);
  }
    

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
        // setCategories={setCategories}
          onNewCategory={onAddCategory}
        />
            {
            categories.map(category =>(
              <GifGrid 
                key={category} 
                category={category}/>)
            )
          }

    </>
  )
}
