import React, { useEffect, useState }from "react";
import { useParams } from "react-router-dom";
import { getOnePark } from "../../services/parks";
import { getAllCoasters } from '../../services/coasters';
  import { Link } from "react-router-dom";

const ParkDetail = () => {
  

  const [park, setPark] = useState(null);
  const [setCoasters] = useState([]);
    const { id } = useParams();

    useEffect(() => {
      const getPark = async () => {
        const park = await getOnePark(id);
        setPark(park);
      };
      getPark();
    }, [id])
  
    useEffect(() => {
      const getCoasters = async () => {
        const results = await getAllCoasters()
        setCoasters(results)
      }
      getCoasters()
    }, [])
  

    return (
      <div>
        {park && (
          <>
            <Link to="/edit">edit button</Link>
            <h1>{park.name}</h1>
            <h3>{park.location}</h3>
            <Link to={`/create/${park.id}`}>add a coaster</Link>
            <div className="park-details">
      {park.coasters.map( (coaster) => (
        <Link to={`/park/${park.id}/coaster/${coaster.id}`}><p key={coaster.id}>{coaster.name}</p></Link>
      ))}
              
          
              
            </div>
          </>
        )}
      </div>
    );
  };


export default ParkDetail;


