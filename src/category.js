import React, { useState } from "react";
import "./App.css";
import Categories from "./categories";

const Category = () => {
    const [data ,setData]= useState(Categories);
    const filterResult =(curItem)=>{
        const result =Categories.filter((curData)=>{
            return curData.type===curItem;
        })
        setData(result)
    }
    return (
        <>
        <h1 className="header"> Let's order Food</h1>
        <div className="container">
              <div className="buttons">
                <button className="btn" onClick={()=>setData(Categories)}>Recommended</button>
                <button className="btn" onClick={()=>filterResult("Vegitarian")}>Veg</button>
                <button className="btn" onClick={()=>filterResult("non-Veg")}>Non-veg</button>
                <button className="btn"  onClick={()=>filterResult("desserts")}>Desserts</button>
              </div>
              <div className="right">
                <div className="cards-content">
                {data.map((values)=>{
                    const {id,title,price,type}= values
                    return(
                        <>
                    <div className="cards" key={id}>
                       <h2 className="title">{title}</h2>
                        <p>{type}</p>
                        <p className="amt">{price}</p>
                        <button className="btn-cart-1">Remove Cart</button>
                        <button className="btn-cart-2">Add Cart</button>
                    </div>
                    
                        </>
                    )
                })}
                </div>
              </div>
              </div>
              
            </>
    )
}

export default Category;
