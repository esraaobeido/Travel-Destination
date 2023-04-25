import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
        <nav>
            <Link to="/"> Home </Link>
            <Link to="/cities/${props.tour.id}"></Link>
        </nav>
    </>
    )
}

export default Navbar;

// {cities.map((tour) => (
//     <Link key={tour.id} to={`/city/${tour.id}`}>
//       <div className="city-card">
//         <img src={tour.image} alt={tour.name} />
//         <h2>{tour.name}</h2>
//       </div>
//     </Link>
//   ))}
