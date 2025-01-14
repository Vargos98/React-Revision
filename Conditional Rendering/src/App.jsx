// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card/Card'
const cardData = [
  {
    imageUrl: "https://images.pexels.com/photos/29956767/pexels-photo-29956767/free-photo-of-cyclist-racing-on-outdoor-velodrome-track.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Sample Card Title 1",
    description: "This is a small description about the first card. It can be customized with different content.",
    Active: false,
  },
  {
    imageUrl: "https://images.pexels.com/photos/28271489/pexels-photo-28271489/free-photo-of-a-cactus-plant-in-front-of-a-rock-formation.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Sample Card Title 2",
    description: "This is a small description about the second card. It can be customized with different content.",
    Active: true,
  },
  {
    imageUrl: "https://images.pexels.com/photos/27969453/pexels-photo-27969453/free-photo-of-a-narrow-cobblestone-street-with-potted-plants.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Sample Card Title 3",
    description: "This is a small description about the third card. It can be customized with different content.",
    Active: false,
  },
  {
    imageUrl: "https://images.pexels.com/photos/30088705/pexels-photo-30088705/free-photo-of-scenic-view-of-new-york-skyline-with-binoculars.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Sample Card Title 4",
    description: "This is a small description about the fourth card. It can be customized with different content.",
    Active: true,
  },
  {
    imageUrl: "https://images.pexels.com/photos/29472456/pexels-photo-29472456/free-photo-of-jack-russell-terrier-standing-on-grass-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Sample Card Title 5",
    description: "This is a small description about the fifth card. It can be customized with different content.",
    Active: true,
  }
];

function App() {


  return (
    <>
     <div className='flex gap-10 flex-wrap'>
        <Card cardData ={cardData}/>
     </div>
     
    </>
  )
}

export default App
