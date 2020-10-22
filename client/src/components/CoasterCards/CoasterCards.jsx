import React, { Component } from 'react';
// import './CoasterCards.css'
// import CoasterCard from '../CoasterCard/CoasterCard';
// import { getAllCoasters } from '../../services/coasters';

// class CoasterCards extends Component{
//   constructor() {
//     super()
//     this.state = {
//       coasters:[]
//     }
//   }
//   async componentDidMount() {
//     const coasters = await getAllCoasters()
//     this.setState({ coasters })
//   }
//   render() {
//     const CARDS = this.state.coasters.map((coasters, index) =>
//       index ? <CoasterCard name={coasters.name} make={coasters.make} model={coasters.model} height={coasters.height} speed={coasters.speed} inversions={coasters.inversions} />
//     )
//     return (
//       <div className='coaster-cards'>
//         {CARDS}
//       </div>
//     )
//   }
// }

const CoasterCards = () => {
  return (
    <p>coaster cards</p>
  )
}

export default CoasterCards;