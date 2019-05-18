import React, { Component} from 'react'
import Card from './CardUI';
import img1 from '../assets/q1.jpg';
import img2 from '../assets/q2.jpg';
import img3 from '../assets/q3.jpg';

class Cards extends Component {
	render() {
		return (
			<div className="container-fluid d-flex justify-content-center">
				<div className="row">
					<div className="col-md-4">
						<Card imgsrc={img1} title="Cosnole"/>
					</div>
					<div className="col-md-4">
						<Card imgsrc={img2} title="Playground"/>
					</div>
					<div className="col-md-4">
						<Card imgsrc={img3} title="Adventure"/>
					</div>
				</div>
			</div>
		);
	}
}

export default Cards;