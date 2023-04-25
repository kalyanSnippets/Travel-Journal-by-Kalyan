import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

export default function App() {

  const cards =  data.map((item, index) => {
    return (
        
        <Card
            key={index}
            item={item}
        />
        
    )
   
})
return (
    <div>
        <Header />
        {cards}
        
    </div>
)
}


