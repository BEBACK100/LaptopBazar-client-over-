
<<<<<<< HEAD
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
=======
>>>>>>> def0b8145465f11f67f86be4d678e1e9d2f7fb9d

import { useLoaderData, useNavigation } from "react-router-dom";

import Spinner from "../Shared/Loadding/Spinner";
import CheckOutform from "./CheckOutform";


<<<<<<< HEAD

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)
console.log(stripePromise);
=======
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
>>>>>>> def0b8145465f11f67f86be4d678e1e9d2f7fb9d

const Payment = () => {
    const booking = useLoaderData();

    const navigation = useNavigation();
    const { model, price, name, email, phone, location } = booking;
    if (navigation.state === "loading") {
        return <Spinner></Spinner>
    }
    return (
<<<<<<< HEAD
        <div className="text-center">
            <h3 className="text-3xl">Payment for {model}</h3>
            <p className="text-xl">Please pay <strong>${price}</strong> for your {name} laptop and take from {location}</p>
            <div className='w-96 my-16'>
                <Elements stripe={stripePromise}>
                    <CheckOutform
=======
        <div className=" text-center">

            <h3 className="text-3xl pl-16">Payment for {model}<span className="text-xl"> {name}</span> Laptop </h3>
            <p className="text-xl">Please pay <strong>${price}</strong> for your Laptop  from {location}</p>
            <div className='w-96 my-12'>
                {/* <Elements stripe={stripePromise}>
                    <CheckoutForm
>>>>>>> def0b8145465f11f67f86be4d678e1e9d2f7fb9d
                        booking={booking}
                    />

                </Elements>
            </div>
        </div>
    );
};

export default Payment;