import React from 'react';



const Card = (props) => {
  return (
    <div className="card" style={{width: "30%", textAlign:"center", marginLeft:"35%" }}>
       <img src="https://th.bing.com/th/id/OIP.wBTCbT-C3Lpi15wsAAlItQHaKA?pid=ImgDet&rs=1" class="card-img-top img-fluid " style={{height:"300px"}} alt="..."/> 
      <div className="card-body">
        
        <h5 className="card-title" style={{fontWeight:"bold"}}>{props.user.name}</h5>
        <p className="card-subtitle mb-2 text-muted">{props.user.email}</p>
        <p className="card-text">{props.user.address.street},<br></br>
        {props.user.address.suite},
        {props.user.address.city},
        {props.user.address.zipcode}, Lat
        {props.user.address.geo.lat}, Lang-
        {props.user.address.geo.lng}</p>
        

        <p className="card-text"><b>Phone :</b>{props.user.phone}<br></br>
        <b>Website : </b>{props.user.website}</p>
        <p className="card-text" style={{backgroundColor:"black" , color:"white" , fontWeight:"bolder"}}>Company : {props.user.company.name}<br></br>
        {props.user.company.catchPhrase}<br></br>
        {props.user.company.bs}</p>

        
      </div>
    </div>
  )
}
export default Card;