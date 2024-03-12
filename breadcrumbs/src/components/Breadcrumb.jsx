import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";

const Breadcrumb = () => {

    const location = useLocation();
    const path = location.pathname.split("/").filter(x=>x);
    useEffect(()=>{
        console.log(path);
    },[location])
  return (
    <div>
       {path.length===0?<span>Home</span>:<Link to="/">Home</Link>}
      {path && path.map((path,index) => {
        return index === path.length-1 ?<span> / {path}</span>:<Link to={`${path}`} key={path}> / {path}</Link>
      })}
    </div>
  )
}

export default Breadcrumb
