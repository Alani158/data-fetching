import getuser from "../../../../lib/getuser"
import getuserPosts from "../../../../lib/getuserposts"
import { Suspense } from "react"
import Userposts from "./components/userposts"
import { userAgent } from "next/server"
import './globals.css'

type params={
    params:{
        userid:string
    }
}


export default async function Userpage({params:{userid}}:params) {
    const userdata : Promise<Users>= getuser(userid)
    const userPostsData: Promise<Post[]> = getuserPosts(userid)

    // const [user, userPosts] = await Promise.all([userdata,userPostsData])
    const user = await userdata
     const post = await userPostsData
  return (
    <>
    <h2>{user.name}</h2>
    <br />
     {post.map(post=>{
        return(
            <Suspense key={post.id} fallback={<h2>loading....</h2>}>
                <div className="flex justify-center">
              <article className="bg-slate-700  w-custom text-center "  key={post.id}>
      <h2 className="text-white text-lg">{post.title}</h2>
      <p className="text-white text-sm mt-3 ">{post.body}</p>
    </article>
    </div>
    </Suspense>
        )
    })}
   
    </>
  )
}
