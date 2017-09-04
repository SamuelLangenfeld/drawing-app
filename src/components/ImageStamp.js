import React from "react";
import  { PropTypes } from "prop-types";

export default function ImageStamp(props) {
  const { action } = props;
  return (
    <div>
      <input
        type="button"
        id="stamp-upload-pointer"
        value="UPLOAD IMAGE"
        className="button"
        onClick={(e) =>{
          let file =document.getElementById('stamp-upload');
          file.click();
        }}
      />
      <input
        type="file"
        id="stamp-upload"
        accept="image/*"
        onChange={ (e) => {
          if (e.target.files[0]){
            let file= e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(e){
              let img = new Image();
              img.src=reader.result;
              action(img);
            }
          }
          else{
            action(null);
          }

        }}
        />
      
    </div>
  );
}

ImageStamp.propTypes = {
  action: PropTypes.func.isRequired
};

//Use javascript's filereader class to get the dataupload and push it into props
//Then i should be able to use it in canvas without an issue.

