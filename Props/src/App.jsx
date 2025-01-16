import { useState } from "react";
import Card from "./components/Card"

const data = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1602178856779-d57888ae2f8f?q=80&w=955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "User One",
    description: "An enthusiastic developer exploring new technologies.",
    friends:true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "User Two",
    description: "A creative designer with a passion for minimalism.",
    friends:false,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1530452540414-c17a65a637fe?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "User Three",
    description: "A full-stack developer who loves solving problems.",
    friends:false,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXN8ZW58MHx8MHx8fDA%3D",
    title: "User Four",
    description: "A digital marketer focused on data-driven strategies.",
    friends:true,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGVzfGVufDB8fDB8fHww",
    title: "User Five",
    description: "An AI enthusiast working on innovative solutions.",
    friends:true,
  },
  {
    id: 6,
    image: "https://plus.unsplash.com/premium_photo-1693258698597-1b2b1bf943cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXN8ZW58MHx8MHx8fDA%3D",
    title: "User Six",
    description: "A freelance writer who crafts engaging content.",
    friends:false,
  },
  {
    id: 7,
    image: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGVzfGVufDB8fDB8fHww",
    title: "User Seven",
    description: "An experienced project manager ensuring smooth workflows.",
    friends:false,
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGVzfGVufDB8fDB8fHww",
    title: "User Eight",
    description: "A passionate photographer capturing life's moments.",
    friends:true,
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGVzfGVufDB8fDB8fHww",
    title: "User Nine",
    description: "An entrepreneur building the next big thing.",
    friends:false,
  },
  {
    id: 10,
    image: "https://plus.unsplash.com/premium_photo-1681489930334-b0d26fdb9ed8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGVzfGVufDB8fDB8fHww",
    title: "User Ten",
    description: "A software tester ensuring top-notch product quality.",
    friends:true,
  }
];

const handleClick = () => {
  alert("Click");
};

const App = () => {
  const [realData, setData] = useState(data)
  return (
    <div className="flex justify-center flex-wrap gap-10 bg-zinc-900">
      {realData.map((item, index) => (
        <Card
         values={item}  
         key={index}
         handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default App;