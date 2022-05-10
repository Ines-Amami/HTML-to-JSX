import video from './Blossom.mp4'
import './App.css';
import cat from './cat.webp'

function App() {
  return (
  
       <div>
       <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
         <h1 className="title red">Your name here:</h1>
         <br />
         <img src= {cat} alt=""/>
         <br />
         <img src="./butterfly.jpg" alt=""/>
       </div>
       <video width={320} height={240} controls>
         <source src={video}  type="video/mp4" />
       </video>
     </div>
  );
}

export default App;
