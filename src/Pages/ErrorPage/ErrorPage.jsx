import React from 'react';
import { Link, useRouteError } from 'react-router-dom';


const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <div class="flex flex-col h-screen bg-black">
                <img
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                    class="object-cover w-full h-64"
                />

                <div class="flex items-center justify-center flex-1">
                    <div class="max-w-xl px-4 py-8 mx-auto text-center">
                        <h2 className='mb-8 font-extrabold text-9xl text-gray-300'>
                            <span className='sr-only'>Error</span> {status || 404}
                        </h2>
                        <h1 class="text-2xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                            {error?.message}
                        </h1>

                        <p class="mt-4 text-gray-300">
                            Try searching again, or return home to start from the beginning.
                        </p>

                        <Link to='/'

                            class="inline-block px-5 py-3 mt-6 text-sm font-medium text-gray-300 bg-purple-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
                        >
                            Go Back Home
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ErrorPage;