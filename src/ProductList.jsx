import { useState } from 'react';
import React from 'react';
import './App.css'

function ProductList() {
  const [products] =
useState([
  {
    id: 1,
    name: 'Dumbbells',
    price: 50,
    description: 'Handheld weights used for a wide variety of strength exercises, targeting individual muscle groups or compound movements.'
  },
  {
    id: 2,
    name: 'Kettlebells',
    price: 20,
    description: 'Cast iron weight with a handle, used for dynamic, functional, and strength-building exercises like swings, cleans, and snatches.'
  },
  {
    id: 3,
    name: 'Barbells',
    price: 100,
    description: 'Long bars onto which weight plates are loaded. Used for compound exercises like squats, deadlifts, bench presses, and overhead presses.'
  },
  {
    id: 4,
    name: 'Weight Plates',
    price: 20,
    description: 'Discs of varying weights that are loaded onto barbells or used for other exercises. Available in cast iron, rubber-coated, or bumper plate varieties.'
  },
  {
    id: 5,
    name: 'Adjustable Bench',
    price: 100,
    description: 'A padded bench that can be adjusted flat, incline, or decline positions, supporting various dumbbell and barbell exercises.'
  },
  {
    id: 6,
    name: 'Resistance Bands',
    price: 10,
    description: 'Elastic bands used for adding resistance to bodyweight exercises, stretching, or rehabilitation.'
  },
  {
    id: 7,
    name: 'Foam Roller',
    price: 15,
    description: 'A cylindrical foam tool used for self-myofascial release, improving flexibility, and relieving muscle soreness.'
  },
  {
    id: 8,
    name: 'Yoga Mat',
    price: 15,
    description: 'A padded mat used for yoga, Pilates, stretching, and floor exercises.'
  },
  {
    id:9,
    name: 'Pull-up Bar',
    price: 40,
    description: 'A bar used for pull-ups and chin ups, often mounted in a doorway or on a wall/rack.'
  },
  {
    id: 10,
    name: 'Medicine Ball',
    price: 25,
    description: 'A weighted ball used for core exerises, explosive movements, and rehabilitation.'
  }
]);
    const middleIndex = Math.ceil(products.length / 2);
    const firstHalf = products.slice(0, middleIndex);
    const secondHalf = products.slice(middleIndex);

    return <main className='main'><h2 className='slogan'>TRAIN LIKE A LEGEND</h2>
    <div className='top-section'><div>
      {firstHalf.map(product => (
        <div key={product.id}><h3>{product.name} - ${product.price}</h3><p>{product.description}</p></div>
      ))}</div><div className='man-image'><img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=745,h=840,fit=crop/Aq205pRaVlF22JkJ/pngwing-1-AE0qKxMR93H4yzlv.png' className='curling-man'/>
      </div></div>
    <div className='bottom-section'><div className='woman-image'><img src='https://img.simplerousercontent.net/scaled_image/8831797/e8c36a35d4daee47c64496e47b01f94d31203a00/Untitled-design-1066w-1066h.png' className='woman-curling'/></div><div> {secondHalf.map(product => (
        <div key={product.id}><h3>{product.name} - ${product.price}</h3><p>{product.description}</p></div>
      ))}</div></div></main>;
 ; }



export default ProductList