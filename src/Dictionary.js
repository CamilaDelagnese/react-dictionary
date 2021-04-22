import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props){
let [Keyword, setKeyword]= useState("");
let[results, setResults]= useState(null);
let[loaded, setLoaded]= useState(false);
let [photos, setPhotos]= useState(null);

function handleDictionaryResponse(response){
      setResults(response.data[0]);
}

function handlePexelsResponse(response){
    setPhotos(response.data.photos);
}

function search(){
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${Keyword}`;
axios.get(apiUrl).then(handleDictionaryResponse);
}

let pexelsApiKey=
"563492ad6f91700001000001b6cc157c1d504795a716d5daf9596bb5";
let pexelsApiUrl=
`https://api.pexels.com/v1/search?query=${Keyword}&per_page=9`;
let headers={ Authorization: `Bearer ${pexelsApiKey}`};
axios.get(pexeslsApiUrl, {headers: headers}).then(handlePexelsResponse);
}

function handleSubmit(event){
    event.preventDefault();
    search();
}
    


function handleKeywordChange(event){
    setKeyword(event.target.value);
}

function load(){
    setLoaded(true);
    search();
}


if (loaded) {
   function return (
    <div className="Dictionary">
     <section>
    <h1>What word do you want to look up?</h1>
    <form onSubmit={handleSubmit}>
     <input type="search"
     onChange={handleKeywordChange} 
     defaultValue={props.defaultKeyword}
     />
    </form>
    <div className="hint">
        suggested words: sunset, wine, yoga, plant...
    </div>
    </section>
    <Results results={results}/>
    <Photos photos={photos}/>
    </div>
    );
} else{
    load();
    return "loading";
}
}
