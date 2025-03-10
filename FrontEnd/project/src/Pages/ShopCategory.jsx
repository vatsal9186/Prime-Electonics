/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { all_prod } from '../assets/product';

import React from 'react'
import { Items } from '../Components/items/Items';

export const ShopCategory = (props) => {
  return (
    <>
      <div className='shop_cat_prod'>
        {
          all_prod.map((item, i) => {
              if(props.category === item.category){
                return(
                  <Items key={i} id={item.id} image={item.image} name={item.name} price={item.price} category={item.category} specs={item.specs} />
                );
              }
              else{
                return null;
              }
          })
        }
      </div>
    </>
  )
}

export default ShopCategory;