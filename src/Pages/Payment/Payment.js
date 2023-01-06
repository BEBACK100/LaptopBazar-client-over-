

import { useLoaderData, useNavigation } from "react-router-dom";
import Spinner from "../Shared/Loadding/Spinner";


// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { model, price, name, email, phone, location } = booking;
    if (navigation.state === "loading") {
        return <Spinner></Spinner>
    }
    return (
        <div className=" text-center">

            <h3 className="text-3xl pl-16">Payment for {model}<span className="text-xl"> {name}</span> Laptop </h3>
            <p className="text-xl">Please pay <strong>${price}</strong> for your Laptop  from {location}</p>
            <div className='w-96 my-12'>
                {/* <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements> */}
            </div>
        </div>
    );
};

export default Payment;