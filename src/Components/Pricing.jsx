
import PropTypes from 'prop-types';

function PricingCard(props) {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${props.isPopular ? 'border-2 border-blue-500' : ''}`}>
      {props.isPopular && (
        <div className="bg-blue-500 text-white text-center py-2 font-semibold">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{props.title}</h3>
        <p className="text-4xl font-bold mb-6">${props.price}<span className="text-gray-500 text-base font-normal">/month</span></p>
        <ul className="mb-6">
          {props.features.map(function(feature, index) {
            return (
              <li key={index} className="flex items-center mb-2">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {feature}
              </li>
            );
          })}
        </ul>
        <button className={`w-full py-2 px-4 rounded-full font-bold ${props.isPopular ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
          Choose Plan
        </button>
      </div>
    </div>
  );
}

function Pricing() {
  const plans = [
    {
      title: 'Basic',
      price: 9.99,
      features: ['Up to $10,000 investment', 'Basic analytics', 'Email support'],
    },
    {
      title: 'Pro',
      price: 19.99,
      features: ['Up to $50,000 investment', 'Advanced analytics', 'Priority support'],
      isPopular: true,
    },
    {
      title: 'Enterprise',
      price: 49.99,
      features: ['Unlimited investment', 'Custom analytics', 'Dedicated account manager'],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Investment Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map(function(plan, index) {
            return (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                features={plan.features}
                isPopular={plan.isPopular}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  isPopular: PropTypes.bool,
};

export default Pricing;

