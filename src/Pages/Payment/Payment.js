
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useLoaderData, useNavigation } from "react-router-dom";

import Spinner from "../Shared/Loadding/Spinner";
import CheckOutform from "./CheckOutform";



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();

    const navigation = useNavigation();
    const { model, price, name, email, phone, location } = booking;
    if (navigation.state === "loading") {
        return <Spinner></Spinner>
    }
    return (
        <div className="text-center">
            <h3 className="text-3xl">Payment for {model}</h3>
            <p className="text-xl">Please pay <strong>${price}</strong> for your {name} laptop and take from {location}</p>
            <div className='w-96 my-16'>
                <Elements stripe={stripePromise}>
                    <CheckOutform
                        booking={booking}
                    />

                </Elements>
            </div>
        </div>
    );
};

export default Payment;