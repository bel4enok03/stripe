import React, { useState } from 'react';
import StripeContainer from './Stripe/StripeContainer';
import strawberry from './strawberry.jpeg';

const App = () => {
	const [showMyImage, setShowMyImage] = useState(false);
	return (
		<div className="App">
			{showMyImage ? (
				<StripeContainer />
			) : (
				<div>
					<p>Fruit shop</p>
					<p>$9.99</p>
					<img src={strawberry} width="500px" alt='strawberry' />
					<div>
						<button onClick={() => setShowMyImage(true)}>Buy</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
