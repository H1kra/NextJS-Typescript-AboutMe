"use client"

import {useState} from "react";

export default function LoginForm() {

    const [showRegister, setShowRegister] = useState(false)

    return (
        <div>
                <div className="relative w-full min-w-xs max-w-sm overflow-hidden border rounded-2xl shadow-lg">

                    <div className={`flex transition-transform duration-200 ease-in-out transform ${showRegister ? '-translate-x-full' : 'translate-x-0'}`}>
                        <div className="w-full flex-shrink-0 p-8 space-y-4 bg-gray-50">
                            <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center" >Sign in</h1>
                            <div>
                                <p>E-mail</p>
                                <input className="w-full px-4 py-2 border rounded-md border-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" type="text" placeholder="your@email.com" />
                            </div>
                            <div>
                                <p>Password</p>
                                <input className="w-full px-4 py-2 border rounded-md border-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" type="password" placeholder="••••••••••" />
                            </div>
                            <button className="w-full rounded-md bg-indigo-500 text-white hover:bg-indigo-400 transition-colors duration-200">Login</button>
                            <p className="text-center">Don`t have an Account?
                                <button onClick={(e ) => { e.preventDefault();  setTimeout(() => {
                                    setShowRegister(true);
                                }, 0);}} className="text-blue-500 hover:text-blue-300 underline">Sign up</button>
                            </p>
                        </div>

                        <div className="w-full flex-shrink-0 p-8 space-y-4 bg-gray-50">
                            <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center" >Register</h1>
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
                            <button className="w-full rounded-md bg-indigo-500 text-white hover:bg-indigo-400 transition-colors duration-200">Register</button>
                            <p className="text-center">Already have an Account?
                                <button onClick={(e) => { e.preventDefault();  setTimeout(() => {
                                    setShowRegister(false);
                                }, 0);}} className="text-blue-500 hover:text-blue-300 underline">Sign in</button>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
    )
}