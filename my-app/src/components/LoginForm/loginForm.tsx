// src/components/LoginForm/loginForm.tsx
"use client"

import {useState, useEffect} from "react";
import React from 'react';
import { useSearchParams } from "next/navigation";

export default function LoginForm() {
    const searchParams = useSearchParams();
    const formToShow = searchParams.get("form");

    const [showRegister, setShowRegister] = useState(formToShow === 'signup');

    useEffect(() => {
        setShowRegister(formToShow === "signup");
    }, [formToShow]);

    return (
        <div>
                <div className="relative w-full min-w-xs max-w-sm overflow-hidden border rounded-2xl shadow-lg">

                    <div className={`flex transition-transform duration-200 ease-in-out transform ${showRegister ? '-translate-x-full' : 'translate-x-0'}`}>
                        <div className="w-full flex-shrink-0 p-8 space-y-4 bg-gray-50">
                            <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center" >Sign in</h1>
                                <form onSubmit={(e) => { e.preventDefault(); /* handle login logic here */ }} className="w-full flex-shrink-0 p-8 space-y-4">
                                    <div>
                                        <p>E-mail</p>
                                        <input
                                            className="w-full px-4 py-2 border rounded-md border-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                                            type="email"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Password</p>
                                        <input
                                            className="w-full px-4 py-2 border rounded-md border-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                                            type="password"
                                            placeholder="••••••••••"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="block mx-auto w-1/2 rounded-md bg-indigo-500 text-white hover:bg-indigo-400 transition-colors duration-200">
                                        Login
                                    </button>
                                </form>
                                <p className="text-center">Don`t have an Account?
                                    <button onClick={()=>setShowRegister(true)}
                                            className="text-blue-500 hover:text-blue-300 underline">Sign up</button>
                                </p>
                        </div>

                        <div className="w-full flex-shrink-0 p-7 space-y-4 bg-gray-50">
                            <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center" >Register</h1>
                            <form onSubmit={(e) => { e.preventDefault(); /* handle login logic here */ }} className="space-y-4">
                                <div className="flex flex-row space-x-2">
                                    <div>
                                        <p>Name</p>
                                        <input className="w-full px-4 py-2 border rounded-md border-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" placeholder="Your name"/>
                                    </div>
                                    <div>
                                        <p>Surname</p>
                                        <input className="w-full px-4 py-2 border rounded-md border-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" placeholder="Your surname"/>
                                    </div>
                                </div>
                                <div>
                                    <p>E-mail</p>
                                    <input className="w-full px-4 py-2 border rounded-md border-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" type="text" placeholder="your@gmail.com" />
                                </div>
                                <div>
                                    <p>Password</p>
                                    <input className="w-full px-4 py-2 border rounded-md border-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" type="password" placeholder="••••••••••" />
                                </div>
                                <button
                                    type="submit"
                                    className="block mx-auto w-1/2 rounded-md bg-indigo-500 text-white hover:bg-indigo-400 transition-colors duration-200">
                                    Register
                                </button>
                            </form>
                            <p className="text-center">Already have an Account?
                                <button onClick={()=>setShowRegister(false)} className="text-blue-500 hover:text-blue-300 underline">Sign in</button>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
    )
}