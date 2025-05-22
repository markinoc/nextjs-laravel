"use client"

import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import { myAppHook } from "../../context/AppProvider";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

interface ProductType {
    title: string,
    description: string,
    cost: number,
    file: File | null,
    banner_image: string
}

const Dashboard: React.FC = () => {
    const { isLoading, authToken } = myAppHook();
    const router = useRouter();
    const fileRef = React.useRef<HTMLInputElement>(null)
    const [formData, setFormData] = useState<ProductType>({
        title: "",
        description: "",
        cost: 0,
        file: null,
        banner_image: ""
    })
    useEffect(() => {
        if (!authToken) {
            router.push("/auth");
            return
        }
    }, [authToken])
    const handleOnChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files){
            setFormData({
                ...formData,
                file: event.target.files[0],
                banner_image: URL.createObjectURL(event.target.files[0])
            })
        }else{
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            })
        }
    }
        
        const handleFormSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            try{
                  const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products`, formData , {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                        "Content-Type": "multipart/form-data"
                    }
                  })
                  console.log(response);
            }catch(error){
                console.log(error)
            }
        }
    
    return <>
        <div className="container mt-4">
            <div className="row">

                <div className="col-md-6">
                    <div className="card p-4">
                        <h4>Add Product</h4>
                        <form onSubmit={ handleFormSubmit }>
                            <input
                                className="form-control mb-2"
                                name="title"
                                placeholder="Title"
                                value={ formData.title} 
                                onChange={ handleOnChangeEvent }
                                required
                            />
                            <input
                                className="form-control mb-2"
                                name="description"
                                placeholder="Description"
                                value={ formData.description }
                                onChange={ handleOnChangeEvent }
                                required
                            />
                            <input
                                className="form-control mb-2"
                                name="cost"
                                placeholder="Cost"
                                type="number"
                                value={formData.cost}
                                onChange={ handleOnChangeEvent }
                                required
                            />
                            <div
                                className="mb-2">
                                    {
                                        formData.banner_image && (<Image
                                            src={formData.banner_image}
                                            alt="Preview"
                                            id="bannerPreview"
                                            width={100} height={100}
                                            style={{ display: "none" }}
                                        />)
                                    }
                                
                            </div>
                            <input
                                className="form-control mb-2"
                                type="file"
                                ref={ fileRef }
                                onChange={ handleOnChangeEvent }
                                id="bannerInput" />
                            <button className="btn btn-primary" type="submit">Add Product</button>
                        </form>
                    </div>
                </div>


                <div className="col-md-6">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Banner</th>
                                <th>Cost</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Sample Product</td>
                                <td>
                                    {/* <Image src="#" alt="Product" style={{width: "50px", height: "50px"}}/>*/}
                                </td>
                                <td>$100</td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-2">Edit</button>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}

export default Dashboard;