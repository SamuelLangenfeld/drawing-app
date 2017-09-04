import React from "react";
import logo from "../../public/img/st-icon-1.png";

export default function StampPreview(props){
  const {stamp} = props;
  let stampImage;
  if (stamp){
    stampImage= <img src={stamp.src} className="stamp-preview" alt="stamp preview"/>
  }
  else{
    stampImage=<img src={logo} className="stamp-preview" alt="stamp preview"/>
  }
  return(
    <div className="preview-wrapper">{stampImage}</div>
  );
}