import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { CheckoutForm } from './CheckoutForm';

const PUBLIC_KEY =
	'pk_test_51MyaSGCiGbAwyBkEvPYWk55w1dAGDv2NcnxAhZcH2IdYhuGi7LfBymfNDNkqkaDGm6rRCHi1ytlQQq2Qemfc5YYg00yr7rCiyR';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
	return (
		<Elements stripe={stripeTestPromise}>
			<CheckoutForm />
		</Elements>
	);
};

export default Stripe;
