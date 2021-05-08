import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function ItemList(){
  const [ items, setItems ] = useState([]);

  useEffect(() => {
    Axios.get('https://dallinmoak.devcamp.space/portfolio/portfolio_items', {withCredentials: true} )
    .then(res => {
      if (res.data.portfolio_items){
        setItems(res.data.portfolio_items);
      }
    })
    .catch(e => {
      console.error(e);
    })

  })

  return (
    items.map(item => {
      return ( 
        <div key={item.id}>
          <div style={{backgroundImage: `url(${item.banner_image_url})`, height: 200}}></div>
        </div>
      )
    })
  );
}