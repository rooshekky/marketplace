
import Layout from "../components/Layout";
export default function Home(){
const data=[{id:1,title:"Discord Setup",price:25}]
return(
<Layout>
<h1>Marketplace</h1>
{data.map(i=>(
<div key={i.id} style={{background:'#111827',padding:'10px',margin:'10px'}}>
{i.title} - ${i.price}
</div>
))}
</Layout>
)}
