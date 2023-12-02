import React from 'react';
import './style.css';

import ProductCard from './ProductCard';

function StorePage() {

  return (
    <div className="store-page">
      <ProductCard img={'https://www.allrecipes.com/thmb/LxYI7rgsZihshxReotwCXq0uoqw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1205638014-2000-d0fbf9170f2d43eeb046f56eec65319c.jpg'} title={'Orange'} price={0.99} />
      <ProductCard img={'https://img.piri.net/resim/imagecrop/2020/09/26/12/21/resized_dcc79-24191133elma.jpg'} title={'Apple'} price={0.59} />
      <ProductCard img={'https://www.seeds-gallery.eu/8291-large_default/lemon-seeds-c-limon.jpg'} title={'Lemon'} price={0.89} />
    </div>
  );
}

export default StorePage;