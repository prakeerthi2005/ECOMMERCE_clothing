import React, { useState } from 'react';
import './Clothing.css'; // Import the CSS file for styling
import { AddShoppingCart, Favorite } from '@mui/icons-material'; // Import icons for "Add to Bag" and "Add to Wishlist"

function Clothing() {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const clothingData = [
    { 
      id: 1, 
      gender: 'Men',
      name: 'Shirt', 
      description: 'Comfortable cotton shirt', 
      variants: [
        { color: 'Blue', design: 'Striped', imageUrl: 'https://handcmediastorage.blob.core.windows.net/productimages/WW/WWSRX009-B25-139827-800px-1040px.jpg' , price: 1400},
        { color: 'Red', design: 'Checkered', imageUrl: 'https://www.bing.com/th?id=OPAC.lX0OHpBKEZf%2bWw474C474&o=5&pid=21.1&w=142&h=142&rs=1&qlt=100&dpr=1.4' , price: 1200},
        { color: 'Green', design: 'Plain', imageUrl: 'https://th.bing.com/th/id/OIP.fNTxBf76KV_ov_NQS3PFngHaHa?w=217&h=217&c=7&r=0&o=5&dpr=1.4&pid=1.7' , price: 1500}
      ]
    },
    { 
      id: 2, 
      gender: 'Women',
      name: 'Dress', 
      description: 'Elegant evening dress', 
      variants: [
        { color: 'Red', style: 'A-line', imageUrl: 'https://th.bing.com/th/id/OIP.Qmhnk2Uf58RzU_9Kd87rYwHaLH?w=135&h=202&c=7&r=0&o=5&dpr=1.4&pid=1.7' , price: 50000},
        { color: 'Black', style: 'Maxi', imageUrl: 'https://th.bing.com/th/id/OIP.H1uAd6a-E3Ke3A78GxxbOwHaJ4?w=136&h=181&c=7&r=0&o=5&dpr=1.4&pid=1.7' , price: 40000}
      ]
    },
    { 
        id: 3, 
        gender: 'Men',
        name: 'Pants', 
        description: 'Casual denim pants', 
        variants: [
          { color: 'Blue', design: 'Skinny', imageUrl: 'https://4.bp.blogspot.com/-KCcFCfxpu50/VOl9GJslOUI/AAAAAAAAhX8/5soOU2qm2RI/s1600/blue-skinny-jeans-for-boysfashion-for-blue-skinny-jeans-for-boys-2gweh122.jpg' , price: 4000},
          { color: 'Black', design: 'Straight', imageUrl: 'https://cdna.lystit.com/photos/299a-2015/10/15/burberry-black-straight-fit-stretch-denim-jeans-product-0-934823030-normal.jpeg' , price: 1200},
          { color: 'Grey', style: 'Slim Fit', imageUrl: 'https://cdnb.lystit.com/photos/4393-2014/03/24/diesel-gray-jeans-shioner-slim-fit-in-grey-slim-jeans-product-1-18628038-0-690285113-normal.jpeg' , price: 3000},
          { color: 'Khaki', style: 'Chino', imageUrl: 'https://th.bing.com/th/id/OIP.wlhYdQHBLnyi7UNK46RbrQHaLW?w=125&h=192&c=7&r=0&o=5&dpr=1.4&pid=1.7' }
        ]
      },
      { 
        id: 4, 
        gender: 'Women',
        name: 'Watch', 
        description: 'Watches for women', 
        variants: [
          { color: 'Silver', style: 'Metal', imageUrl: 'https://ae01.alicdn.com/kf/HTB1PhObSVXXXXaqXVXXq6xXFXXXP/Silver-Women-Watches-Gift-Luxury-Stainless-Steel-Metal-Watch-Bracelets-Montre-Femme-Hot-Design-Quartz-Watch.jpg' , price: 40000},
          { color: 'Black', style: 'Metal', imageUrl: 'https://ae01.alicdn.com/kf/HTB1RA4VKFXXXXa7XXXXq6xXFXXXu/KEVIN-New-Design-Women-Watches-Fashion-Black-Round-Dial-Stainless-Steel-Band-Quartz-Wrist-Watch-Mens.jpg_640x640.jpg' , price: 90000}
        ]
      },
      { 
        id: 5, 
        gender: 'Men',
        name: 'Watch', 
        description: 'Watches', 
        variants: [
          { color: 'Silver', style: 'Metal', imageUrl: 'https://i5.walmartimages.com/asr/8bacc327-52a0-45c5-9439-49bcd98c5542_1.08245686795da8dcb032efcc15a528d0.jpeg' , price: 40000},
          { color: 'Seiko', style: 'Green', imageUrl: 'https://th.bing.com/th/id/OIP.NSSstibMyXM-I6G7mgzT9AHaHa?w=190&h=191&c=7&r=0&o=5&dpr=1.4&pid=1.7' , price: 98000}
        ]
      },
      { 
        id: 6, 
        gender: 'Women',
        name: 'Shirt', 
        description: 'Shirts for Women', 
        variants: [
          { color: 'Red', style: 'Checkered', imageUrl: 'https://www.bing.com/th?id=OPAC.%2bok%2f0okTEMXNzw474C474&o=5&pid=21.1&w=142&h=142&rs=1&qlt=100&dpr=1.4' , price: 9000},
          { color: 'Pink', style: 'Polka Dot', imageUrl: 'https://th.bing.com/th/id/OIP.g1ZI7NdljF55RBY-Y_UzFgHaLH?rs=1&pid=ImgDetMain' , price: 3500}
        ]
      },
      { 
        id: 7, 
        gender: 'Women',
        name: 'Pants', 
        description: 'Casual denim pants for women', 
        variants: [
          { color: 'Black', style: 'Skinny', imageUrl: 'https://cdna.lystit.com/photos/missguided/7bfb7fa5/missguided-designer-Black-High-Waisted-Extreme-Ripped-Skinny-Jeans.jpeg' , price: 4030},
          { color: 'Blue', style: 'Straight', imageUrl: 'https://th.bing.com/th/id/OIP.4JrbDD7iCpIHya3Y1xjf8QHaLH?w=139&h=209&c=7&r=0&o=5&dpr=1.4&pid=1.7' , price: 1200},
          { color: 'Grey', style: 'Slim Fit', imageUrl: 'https://th.bing.com/th/id/OIP.uQY1M7LrKo8_QLwMgmTWywHaJQ?rs=1&pid=ImgDetMain' , price: 3550}
        ]
      }
      
    // Add more clothing items as needed
  ];

  const handleGenderChange = (e) => {
    const selectedGender = e.target.value;
    setSelectedGender(selectedGender);
    setSelectedItem(null); // Reset selected item when gender changes
    setSelectedVariant(null); // Reset selected variant when gender changes
  };

  const handleItemChange = (e) => {
    const itemName = e.target.value;
    setSelectedItem(itemName);
    setSelectedVariant(null); // Reset selected variant when item changes
  };

  const handleVariantChange = (e) => {
    const variantIndex = e.target.value;
    setSelectedVariant(variantIndex);
  };

  return (
    <div className="clothing-container">
      <h2>Clothing</h2>
      <div className="filters">
        <select value={selectedGender || ''} onChange={handleGenderChange}>
          <option value="">Select Gender</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
        </select>
        {selectedGender && (
          <select value={selectedItem || ''} onChange={handleItemChange}>
            <option value="">Select Item</option>
            {clothingData
              .filter(item => item.gender === selectedGender)
              .map(item => (
                <option key={item.id} value={item.name}>{item.name}</option>
              ))}
          </select>
        )}
        {selectedItem && (
          <select value={selectedVariant || ''} onChange={handleVariantChange}>
            <option value="">Select Variant</option>
            {clothingData
              .find(item => item.name === selectedItem && item.gender === selectedGender)
              .variants.map((variant, index) => (
                <option key={index} value={index}>{variant.color} {variant.design}</option>
              ))}
          </select>
        )}
      </div>
      <div className="clothing-list">
        {clothingData.map(item => (
          (selectedGender === null || selectedGender === item.gender) && // Filter by gender
          (selectedItem === null || selectedItem === item.name) && // Filter by item name
          item.variants.map((variant, index) => (
            (selectedVariant === null || selectedVariant === index.toString()) && // Filter by variant index
            <div key={`${item.id}_${index}`} className="clothing-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>Variant:</strong> {variant.color} {variant.design}</p>
              <p><strong>Price:</strong> {variant.price}</p>
              <div className="product-actions">
                <Favorite /> {/* Add to Wishlist icon */}
                <AddShoppingCart /> {/* Add to Bag icon */}
              </div>
              <img src={variant.imageUrl} alt={`${item.name} - ${variant.color} ${variant.design}`} />
            </div>
          ))
        ))}
      </div>
    </div>
  );
}

export default Clothing;