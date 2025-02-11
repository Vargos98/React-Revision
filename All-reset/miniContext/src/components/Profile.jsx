import { useContext } from 'react'
import UserContext from '../context/UserContext'
const Profile = () => {
  const { user } = useContext(UserContext)

  if (!user) return (
    <div>
      <h1>Please Login....!!!</h1>
    </div>
  )
  return (
    <div>
      <h1>Welcome {user.username}</h1>
    </div>
  )

}

export default Profile