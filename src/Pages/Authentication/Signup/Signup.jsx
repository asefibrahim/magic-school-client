import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle, FaUser, FaFile, FaPassport } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import GoogleLogin from '../../../Shared/GoogleLogin';
import Swal from 'sweetalert2';


const Signup = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [image, setImage] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const imageHostingUrl = "https://api.imgbb.com/1/upload?key=7d6531eb09a44143c919ad17d6300d95"
    const onSubmit = data => {
        console.log(data);
        if (data.password !== data.confirmPassword) {
            setError('Password Did not Match')
            return
        }
        const formData = new FormData()
        formData.append('image', data.image[0])

        fetch(imageHostingUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse);
                if (imgResponse.success) {
                    const imageUrl = imgResponse.data.display_url
                    setImage(imageUrl)
                }

            })
        createUser(data.email, data.password)

            .then(result => {
                console.log(result.user);
                const loggedUser = result.user
                setError('')
                Swal.fire('Registration Successful !')
                console.log(loggedUser);
                console.log(data);

                updateUserProfile(data.name, image)
                    .then(() => {
                        const savedUser = { name: data.name, email: data.email }
                        console.log(savedUser);
                        fetch('https://illusion-school-server.vercel.app/user', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })

                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.insertedId) {
                                    reset()
                                    navigate(from)
                                }
                            })

                    })



            })



    }

    return (
        <div>
            <div>

                <div class="flex flex-warp w-full">


                    <div class="flex flex-col  w-full md:w-1/2">
                        <div class="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
                            <a href="#" class="p-4 text-xl font-bold text-white bg-black">
                                Design.
                            </a>
                        </div>
                        <div class="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                            <p class="text-3xl text-center">
                                Register Here
                            </p>
                            <form onSubmit={handleSubmit(onSubmit)} class="flex flex-col pt-3 md:pt-8">
                                <div class="flex flex-col pt-4">
                                    <div class="flex relative ">
                                        <span class=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <FaUser></FaUser>
                                        </span>

                                        <input type="text" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name" {...register("name", { required: true })} />
                                    </div>
                                </div>
                                <div class="flex flex-col pt-4">
                                    <div class="flex relative ">
                                        <span class=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                                </path>
                                            </svg>
                                        </span>
                                        <input type="email" id="design-login-email" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" {...register("email", { required: true })} />
                                    </div>
                                </div>
                                <div class="flex flex-col pt-4 ">
                                    <div class="flex relative ">
                                        <span class=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                                </path>
                                            </svg>
                                        </span>

                                        <input type="password"   {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })} placeholder="password" className='  border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' />




                                    </div>
                                </div>
                                <div class="flex flex-col pt-4 ">
                                    <div class="flex relative ">
                                        <span class=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                                </path>
                                            </svg>
                                        </span>
                                        <input type="password" id="design-login-password" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder=" Confirm Password" {...register("confirmPassword", { required: true })} />
                                    </div>
                                </div>
                                <div class="flex flex-col pt-4 mb-12 ">
                                    <div class="flex relative ">
                                        <span class=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <FaFile></FaFile>
                                        </span>
                                        <input type="file" id="design-login-password" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder=" Chose Photo" {...register("image", { required: true })} />
                                    </div>
                                </div>

                                <div className='mb-5    '> {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                    <p className='text-red-600'>{error}</p>
                                </div>

                                <button type="submit" class="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 ">
                                    <span class="w-full">
                                        Login
                                    </span>
                                </button>
                                <GoogleLogin></GoogleLogin>
                            </form>


                            <div class="pt-12 pb-12 text-center">
                                <p>
                                    Already have an account?
                                    <Link to="/login" class="font-semibold underline">
                                        Login here.
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="w-1/2 shadow-2xl">
                        <img class="hidden object-cover w-full h-screen md:block" src="https://images.unsplash.com/photo-1556195332-95503f664ced?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80" />
                    </div>


                </div>

            </div>

        </div>
    );
};

export default Signup;