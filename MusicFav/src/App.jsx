import { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const songs = [
  {
    image: "https://images.unsplash.com/photo-1669269816497-87a87d27291a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpdmlkZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Shape of You",
    artist: "Ed Sheeran",
    added: false,
  },
  {
    image: "https://images.unsplash.com/photo-1669269816497-87a87d27291a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpdmlkZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Blinding Lights",
    artist: "The Weeknd",
    added: true,
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1668902219188-c3f71ee56207?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRpdmlkZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Levitating",
    artist: "Dua Lipa",
    added: true,
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1668902219188-c3f71ee56207?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRpdmlkZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Peaches",
    artist: "Justin Bieber",
    added:false
  },
  {
    image: "https://images.unsplash.com/photo-1594333322324-faa0368080e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRpdmlkZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Drivers License",
    artist: "Olivia Rodrigo",
    added:false
  },
];


function App() {

  const [song, setSong] = useState(songs);
  const handleClick = (index) => {
  setSong((prevSongs) =>
    prevSongs.map((song, i) =>
      i === index ? { ...song, added: !song.added } : song
    )
  );
};

  return (
    <div className='w-full h-screen bg-zinc-800 px-20'>
      <Navbar data={song}/>
      <div className='flex gap-10 items-center flex-wrap'>
        {song.map((item,index)=>{
          return <Card data={item}
          key={index}
          handleClick={() => handleClick(index)} />
        })}
      </div>
      
    </div>
  )
}

export default App
