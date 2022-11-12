import React from 'react'
// const ImageRest = ({src,name,width})=>{
//     return(
//         <div style={{flex:1}}>
//             <img src={src} width={width} alt={name}/>
//          </div>
//     )
// }
// export function RestaurantCard({data}){
//     const{
//         name,
//         id,
//         cuisine,
//         costForTwo,
//         minOrder,
//         deliverTime,
//         payment_methods:{cash,card},
//         rating,
//         votes,
//         reviews,
//         src
//     }=data;

//     return (
//         <div style={{display:'flex',flexDirection:'row', padding:'15px'}}>
//             <ImageRest src={src} alt={name} width={'150px'}/>
//             <p>{name}</p>
    
//         </div>
//     )
// }
// export const RestaurantCard = ({data})=>{
//     const{
//         name,
//         id,
//         cuisine,
//         costForTwo,
//         minOrder,
//         deliverTime,
//         payment_methods:{cash,card},
//         rating,
//         votes,
//         reviews,
//         src
//     }=data;

//     return (
//         <div style={{display:'flex',flexDirection:'row', padding:'15'}}>
//             <ImageRest src={src} alt={name} width={'150px'}/>
//             <p>{name}</p>
            
//         </div>
//     )
// }

 function ImageRest({src,width,name}){
    return(
        <div style={{flex:1}}>
            <img src={src} width={width} alt={name}></img>
        </div>
    )
}
export default function RestaurantCard({data}){
    const{
      name,
      id,
      cuisine,
      costForTwo,
      minOrder,
      deliveryTime,
      payment_methods:{card,cash},
      rating,
      votes,
      reviews,
      src
    }=data
    return(
        <div style={{display:'flex',flexDirection:'row', padding:'20px',border:'1px solid black',width:'500px'}}>
          
            <div>
                <ImageRest src={src} width='200px'/>
                <p>Cost for two :₹<span style={{color:'blue'}}>{costForTwo}</span></p>
                <p>Min ₹{minOrder}</p>
            </div>
            <div style={{paddingLeft:'10px'}}>
                <div>{name}</div>
                <div style={{color:'red'}}>{rating} star</div>
                
                <div style={{color:'green'}}>{cuisine.join(',')}</div>
                
                <h3>Reviews</h3>
                <p>{reviews}</p>
                <p>
                    Accepts: {cash && card ? "Cash and Card" : card ? "Card" : "Cash"}
                </p>
               
            </div>
            
        </div>
        
    )
    
}