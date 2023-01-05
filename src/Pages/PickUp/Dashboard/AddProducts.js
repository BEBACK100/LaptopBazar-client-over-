
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Shared/Loadding/Spinner';



const AddProducts = () => {
    const { handleSubmit, formState: { errors }, register, isLoading } = useForm();

    const imgHostkey = process.env.REACT_APP_IMAGEBB_KEY
    console.log(imgHostkey);
    const navigate = useNavigate();
    // const { isLoading } = useQuery('')
    // const { data: specialties, isLoading } = useQuery({
    //     queryKey: ['specialty'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/appointmentSpecialty')
    //         const data = await res.json();
    //         return data;
    //     }

    // })
    const handleproducts = data => {
        console.log(data);
        console.log(data.image[0])
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostkey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        name: data.name,
                        email: data.email,
                        Location: data.location,
                        ProductsName: data.laptopname,
                        OldPrice: data.oldnumber,
                        NewPrice: data.newnumber,
                        image: imgData.data.url
                    }
                    //save products information to database

                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {

                            'content-type': 'application/json',
                            authorization: `bearer${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/manageproducts')
                        })
                }
            })
    }

    if (isLoading) {
        return <Spinner></Spinner>

    }
    return (
        <div className='w-3/4 p-7 bg-slate-400 text-center text-2xl'>
            <h1 >Add your old/new Laptop</h1>
            <form onSubmit={handleSubmit(handleproducts)}>
                <div className="form-control  w-full ">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full " />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full " />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Laptop Name</span></label>
                    <input type="text" {...register("laptopname", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full " />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Old Price</span></label>
                    <input type="number" {...register("oldnumber", {
                        required: "number is Required"
                    })} className="input input-bordered w-full " />
                    {errors.name && <p className='text-red-500'>{errors.oldnumber.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">New Price</span></label>
                    <input type="number" {...register("newnumber", {
                        required: "number is Required"
                    })} className="input input-bordered w-full " />
                    {errors.name && <p className='text-red-500'>{errors.newnumber.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full " />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;

