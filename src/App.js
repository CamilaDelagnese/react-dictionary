
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
 
      Dictionary App 
      </header>
      <main>
        <Dictionary defaultKeyword="sunset"/>
      </main>
      <footer className="App-footer">
       <small> Coded by Camila Delagnese</small>
      </footer>
      </div>
    </div>
  );
} 


