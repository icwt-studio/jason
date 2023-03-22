export default function Windowsbar (props) {
    const template = props.template

    if(template === 'vibes90s') {
        return(
            <div style={{backgroundColor:"#ffe489", height:"20px", width:"100%", display:'flex', alignItems:'center', justifyContent:'flex-end', padding:'0 6px', borderBottom:'1px solid #111'}}>
                <div style={{height:'15px', width:'15px', border:"1px solid #111"}}>
                    <p style={{position:'relative', top:'-11px', left:'2px'}}>_</p>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center',height:'15px', width:'15px', border:"1px solid #111", marginLeft:'2px'}}>
                    <div style={{height:'10px', width:'10px', border:"1px solid #111", borderTop:'2px solid #111'}}>
                    </div>
                </div>
                <div style={{height:'15px', width:'15px', border:"1px solid #111", marginLeft:'2px'}}>
                    <p style={{position:'relative', top:'-9px', left:'2px'}}>
                        x
                    </p>
                </div>
            </div>
        )
    }
}