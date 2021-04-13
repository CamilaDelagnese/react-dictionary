import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary(){
let [Keyword, setKeyword]= useState("");

function search(event){
    event.preventDefault();
    alert(`Searching for ${Keyword} definition`);
}

function handleKeywordChange(event){
    console.log(event.target.value);
}

    return (
    <div className="Dictionary">
    <form onSubmit={search}>
     <input type="search"onChange={handleKeywordChange} />
    </form>
    </div>
    );
}