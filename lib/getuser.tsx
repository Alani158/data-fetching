

export default async function getuser(userid:string){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
 
     if(!res.ok) throw Error('something went wrong')
      
     return res.json();
}
   

