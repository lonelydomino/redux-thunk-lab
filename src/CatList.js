// write your CatList component here
import React from 'react'
const CatList = (props) => {
    let array = props.catPics.map( cat => {
        return <img src={cat.url}/>
    })
     return (
       <div>
           {array}
       </div>
     )
}
export default CatList