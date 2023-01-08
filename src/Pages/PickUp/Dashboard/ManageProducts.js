import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConformationModal from '../../Shared/ConformationModal/ConformationModal';
import Spinner from '../../Shared/Loadding/Spinner';

const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null)
    const closemodal = () => {
        setDeletingProduct(null)
    }

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('https://laptop-bazar-second-hand-server-assignment12.vercel.app/products', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                // console.log(data)
                return data;
            }
            catch (error) {

            }
        }


    })


    const handleDeletProduct = product => {
        // console.log(product);
        fetch(`https://laptop-bazar-second-hand-server-assignment12.vercel.app/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    refetch();
                    toast.success(`Product ${product.name} is deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <div className="text-3xl">Manage Products:{products?.length} </div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Old Price</th>
                            <th>New Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={product.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{product.name}</td>
                                <td>{product.email}</td>

                                <td>{product.ProductsName}</td>
                                <td>{product.OldPrice} TK</td>
                                <td>{product.NewPrice} TK</td>
                                {/* <td><button className="btn bg-red-600 btn-xs">Delete</button></td> */}
                                <td> <label onClick={() => setDeletingProduct(product)} htmlFor="conformation-modal" className="btn bg-red-600 btn-xs">Delete</label></td>
                            </tr>)}

                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConformationModal
                    title={`Are you sure You want to delet This??`}
                    message={`if you delet ${deletingProduct.name}. it can not regain`}
                    closemodal={closemodal}
                    success={handleDeletProduct}
                    successbtnName="Delet"
                    modalData={deletingProduct}
                ></ConformationModal>
            }
        </div>
    );
};

export default ManageProducts;