import Single from "../../Components/SingleProfile/Single"
import { singleUser } from "../../data"
import "./profile.scss"

const Profile = () => {

  //Fetch data and send to Single Component
  
  return (
    <div className="user">
      <Single {...singleUser}/>
    </div>
  )
}

export default Profile