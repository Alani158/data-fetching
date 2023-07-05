import Link from "next/link"
import getAllUsers from "../../../lib/getAllUsers"
 
export default async function Users() {
     const usersData : Promise<Users[]>= getAllUsers()
     const users = await usersData
     
  return (
    <>
    <div>
        <h1 className="text-white text-lg text-center">getAllUsers</h1>
  {users.map(user=>{
    return(
        <p className="text-white text-lg text-center" key={user.id}>
          <Link href={`/users/${user.id}`} >{user.name}</Link>
           <p>hello</p>
        </p>
       
    )
  })}
    </div></>
  )
}