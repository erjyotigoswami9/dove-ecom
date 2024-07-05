import React from 'react'

export const OfferNavbar = () => {
  return (
    // <!-- 30% div -->
       
    <div className="offer1stDiv">
        <div className="notinMarquess">Free shipping on orders above Rs 499  
         <button className="closeButton">X</button>
        </div>
         {/* <!-- 
             array1 = [
                  "SHOP ANY 3 PRODUCTS @ 25% OFF & 3 PRODUCTS @ 30% OFF",
                  "UPTO 30% Off on all combos. Shop Now!",
                  "Limited period offer on our NEW LAUNCHES. Show Now!",
                  ""
             ]
          --> */}
          <div className="marquesfirst"><marquee direction="left">Free shipping all on orders above Rs 499 </marquee></div>
     </div>
  )
}
