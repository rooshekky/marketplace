
export default function Layout({children}){
return(
<div style={{display:'flex',minHeight:'100vh',background:'#0b1220',color:'white'}}>
<div style={{width:'220px',background:'#0f172a',padding:'20px'}}>
<h2>OPM Market</h2>
<a href="/">Marketplace</a><br/>
<a href="/create">Sell</a>
</div>
<div style={{flex:1,padding:'20px'}}>{children}</div>
</div>
)}
