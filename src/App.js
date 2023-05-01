import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Blogs from './pages/blogs/Blogs';
import Pricing from './pages/pricing/Pricing';
import Contact from './pages/contact/Contact';
import SingleProject from './pages/projects/SingleProject'
import SingleBlog from './pages/blogs/SingleBlog';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

function App() {

  // Project 1
  // const cardsP1 = dataP1.map(item => {
  //   return (
  //     <CardP1 key={item.id} {...item}/>
  //   )
  // }) 

  // Box Project 3
  // const [squares, setSquares] = useState(boxData)

  // function toggle(id) {
  //   setSquares(prevSquares => {
  //     return prevSquares.map((square) => {
  //       return square.id === id ? {...square, on: !square.on} : square
  //     })
  //   })
  // }

  // const squareElements = squares.map(square => (
  //   <Box
  //     key={square.id}
  //     id={square.id}
  //     on={square.on}
  //     toggle={() => toggle(square.id)}
  //   />
  // ))
  // Box Project 3 End


  // Joke Project 
  // const jokeElement = jokeData.map(item => (
  //   <Joke 
  //     setup={item.setup}
  //     punchline={item.punchline}
  //   />
  // ))
  // Joke Project End


  return (
    <div className="App">


        <Routes>
          <Route path='/terms-of-service' element={<Terms/>}/>
          <Route path='/privacy-policy' element={<Privacy/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/projects/:id' element={<SingleProject/>}/>
          <Route path='/blog' element={<Blogs/>}/>
          <Route path='/blog/:id' element={<SingleBlog/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>






      {/* <Practice1 /> */}





      
      {/* <ApiData /> */}




      {/* <Form/> */}



      {/* Joke Project */}
      {/* {jokeElement} */}




      {/* Box Project 3 */}
      {/* <main style={{display: 'grid', gridTemplateColumns: 'repeat(2, 150px)'}}>
        {squareElements}
      </main> */}



      {/* Project 2 */}
      {/* <Header/>
      <Project2/> */}




      {/* Project 1 */}
      {/* <section>
        {cardsP1}
      </section> */}






      {/* {jokeElement} */}



      {/* <Contact4 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11dbvjijhPrRPlnz-gmIREmQi67ShE2lD7_KcjB-IrQ&s" 
        name="NameTest111" 
        phone="+383123456789"
        email="11111@example.com"
      />

      <Contact4 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11dbvjijhPrRPlnz-gmIREmQi67ShE2lD7_KcjB-IrQ&s" 
        name="NameTest222" 
        phone="+383123456789"
        email="222222222@example.com"
      />

      <Contact4 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11dbvjijhPrRPlnz-gmIREmQi67ShE2lD7_KcjB-IrQ&s" 
        name="NameTest333" 
        phone="+383123456789"
        email="333333@example.com"
      />

      <Contact4 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11dbvjijhPrRPlnz-gmIREmQi67ShE2lD7_KcjB-IrQ&s" 
        name="NameTest123" 
        phone="+383123456789"
        email="444444@example.com"
      /> */}




    </div>
  );
}



export default App;