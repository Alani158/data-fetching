

export default async function getuserPosts(userid:string){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?=userid=${userid}`)
 
     if(!res.ok) throw Error('something went wrong')
      
     return res.json();
}
   

