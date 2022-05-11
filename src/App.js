import './index.css';
import './List';
import List from './List';
import insanlar from './insanlar';
import { useState } from 'react';


function App() {  
  const [people,setPeople]=useState(insanlar);
  return (
    <div className="App">
     <main>
       <section className="container">
         <h3>Number {people.length}  Birthday today</h3>
         <List people={people}/>
         <button onClick={()=> console.log('you clicked button')}>Clear All</button>
       </section>
     </main>
    </div>
  );
}

export default App;
