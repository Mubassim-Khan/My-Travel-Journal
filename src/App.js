import './App.css';
import About from './Components/About';
import Card from './Components/Card';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import data from './Data';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <div className="container my-3">
              <div className="row">
                {data.map((item, id) => {
                  return <div className="col-md-4" key={id}>
                    <Card
                      key={item.id}
                      title={item.title}
                      location={item.location}
                      mapsLink={item.googleMapsLink}
                      startDate={item.date.startDate}
                      endDate={item.date.endDate}
                      description={item.description}
                      image={item.imgURL}
                    />
                  </div>
                })}
              </div>
            </div>
          }>
          </Route>

          <Route exact path='/about' element={<div className="container"><About /></div>}> </Route>
          <Route exact path='/contact' element={<div className="container mt-3 mb-3"><Contact /></div>}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
