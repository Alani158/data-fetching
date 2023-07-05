type props ={
    promise:Promise<Post[]>
}

export default async function Userposts({promise}:props) {
     const post = await promise
    
    const content = post.map(post=>{
return(
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
)
    })
  return content;
}
