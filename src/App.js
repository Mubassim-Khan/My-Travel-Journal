import './App.css';
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import data from './Data';

function App() {
  return (
    <>
      <Navbar />
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
    </>
  );
}

export default App;
