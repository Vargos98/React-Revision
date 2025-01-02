import Card from "./components/Card"

const data = [
  {
    id: 1,
    image: "https://source.unsplash.com/random/200x200?face1",
    title: "User One",
    description: "An enthusiastic developer exploring new technologies."
  },
  {
    id: 2,
    image: "https://source.unsplash.com/random/200x200?face2",
    title: "User Two",
    description: "A creative designer with a passion for minimalism."
  },
  {
    id: 3,
    image: "https://source.unsplash.com/random/200x200?face3",
    title: "User Three",
    description: "A full-stack developer who loves solving problems."
  },
  {
    id: 4,
    image: "https://source.unsplash.com/random/200x200?face4",
    title: "User Four",
    description: "A digital marketer focused on data-driven strategies."
  },
  {
    id: 5,
    image: "https://source.unsplash.com/random/200x200?face5",
    title: "User Five",
    description: "An AI enthusiast working on innovative solutions."
  },
  {
    id: 6,
    image: "https://source.unsplash.com/random/200x200?face6",
    title: "User Six",
    description: "A freelance writer who crafts engaging content."
  },
  {
    id: 7,
    image: "https://source.unsplash.com/random/200x200?face7",
    title: "User Seven",
    description: "An experienced project manager ensuring smooth workflows."
  },
  {
    id: 8,
    image: "https://source.unsplash.com/random/200x200?face8",
    title: "User Eight",
    description: "A passionate photographer capturing life's moments."
  },
  {
    id: 9,
    image: "https://source.unsplash.com/random/200x200?face9",
    title: "User Nine",
    description: "An entrepreneur building the next big thing."
  },
  {
    id: 10,
    image: "https://source.unsplash.com/random/200x200?face10",
    title: "User Ten",
    description: "A software tester ensuring top-notch product quality."
  }
];




const App = () => {
  return (
    <div className="flex justify-center flex-wrap gap-10 ">
      {data.map((item)=>{
        return <Card key={item.id} image={item.image} title ={item.title} description={item.description}/>
      })}
      
    </div>
  )
}

export default App