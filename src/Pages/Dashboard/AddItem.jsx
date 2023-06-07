import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../hooks/useAxiosSecure'
import Swal from 'sweetalert2';

const img_Hoisting_Token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
    const [axiosSecure]= useAxiosSecure()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const image_hoisting_URL = `https://api.imgbb.com/1/upload?key=${img_Hoisting_Token}`
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.image[0])
        fetch(image_hoisting_URL, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imageRes =>{
            if(imageRes.success){
                const imgURL = imageRes.data.display_url;
                const {name, price, category, recipe} = data;
                const newItem = {name, price: parseFloat(price), category, recipe, image: imgURL}
                axiosSecure.post('/menu', newItem)
                .then(data =>{
                    if(data.data.insertedId){
                        reset()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your menu has been saved',
                            showConfirmButton: false,
                            timer: 1000
                          })
                    }
                })
            }
        })        
    };

    return (
        <div className='w-full'>
            <SectionTitle subHeading={"Whats's new"} heading={"Add an item"}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className='px-10'>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="recipe name"
                        {...register("name", { required: true, maxLength: 20 })}
                        className="input input-bordered w-full " />
                </div>
                <div className='flex my-4'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue={"pick one"} {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick one</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-2">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" placeholder="price"
                            {...register("price", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea
                        {...register("recipe", { required: true })}
                        className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-medium">Pick a file</span>
                    </label>
                    <input type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <input className='btn btn-sm my-3' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;