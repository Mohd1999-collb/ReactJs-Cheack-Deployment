import React from 'react'
import image from "../assets/image.jpg";

const Header = () => {
  const style = {
    width:"15rem", 
    height:"15rem", 
    display:"block", 
    margin: "20px auto", 
    borderRadius:"50%"
  }  

  return (
    <div className='header'>

      <h1>Mohd Talib</h1>

      {/* Upload image from external source */}
      {/* <img src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg" alt="boy" style={style}/> */}


      {/* New way to upload the image */}
      <img src={image} alt="" style={{width:"15rem", height:"15rem", display:"block", margin: "20px auto", borderRadius:"50%"} }/>

      {/* Old way to upload the image */}
      {/* <img src={require("../assets/image.jpg")} alt="" style={{width:"15rem", height:"15rem", display:"block", margin: "20px auto", borderRadius:"50%"} }/> */}
    </div>
  )
}

export default Header

// 
