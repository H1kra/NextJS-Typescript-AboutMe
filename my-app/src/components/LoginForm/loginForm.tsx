// src/components/LoginForm/loginForm.tsx
"use client"

import React, { useState, useEffect} from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import backIcon from "../../../public/Components/Login/back.png";
import { useRouter } from 'next/navigation';

export default function LoginForm() {

    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
    });
    const [registerFormData, setRegisterFormData] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
    });

    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    };

    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const formToShow = searchParams.get("form");
    const [showRegister, setShowRegister] = useState(formToShow === 'signup');
    useEffect(() => {
        setShowRegister(formToShow === "signup");
    }, [formToShow]);
    const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterFormData({
            ...registerFormData,
            [e.target.name]: e.target.value,
        });
    };
    const handleRegisterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const res = await fetch("http://localhost:8080/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(registerFormData),
            });

            if (res.ok) {
                setMessage("Registration successful!");
                setRegisterFormData({ name: "", surname: "", email: "", password: "" });
            } else {
                const errorText = await res.text();
                setMessage(errorText || "Registration failed");
            }
        } catch (err) {
            console.error(err);
            setMessage("Network error, please try again.");
        } finally {
            setLoading(false);
        }
    };
    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginFormData({
            ...loginFormData,
            [e.target.name]: e.target.value,
        });
    };
    const handleLoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const res = await fetch("http://localhost:8080/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginFormData),
            });

            if (res.ok) {
                setMessage("Logged-in successfully!");
                setLoginFormData({ email: "", password: "" });
            } else {
                const errorText = await res.text();
                setMessage(errorText || "Login failed");
            }
        } catch (err) {
            console.error(err);
            setMessage("Network error, please try again.");
        } finally {
            setLoading(false);
        }
    };

    //const [showPassword, setShowPassword] = useState(false);

    return (
        <>
                <div className={"relative w-full min-w-xs max-w-sm overflow-hidden border rounded-2xl shadow-lg"}>
                    <div className={"w-full flex-shrink-0 pt-4 pl-4 space-y-4 bg-gray-50"}>
                        <button onClick={handleGoBack}>
                            <Image
                                src={backIcon}
                                alt="Go back"
                                width={15}
                                height={15}
                                className="hover:opacity-50"
                            />
                        </button>
                    </div>
                    <div className={`flex transition-transform duration-200 ease-in-out transform ${showRegister ? '-translate-x-full' : 'translate-x-0'}`}>
                        <div className={"w-full flex-shrink-0 p-8 pt-4 space-y-4 bg-gray-50"}>
                            <h1 className={"text-2xl font-bold mb-6 text-center"}>
                                Sign in
                            </h1>
                                <form
                                    onSubmit={handleLoginSubmit}
                                    className={"w-full flex-shrink-0 p-8 space-y-4"}
                                >
                                    <div>
                                        <label>
                                            E-mail
                                            <input
                                                className={"w-full px-4 py-2 border rounded-md border-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"}
                                                type="email"
                                                name="email"
                                                value={loginFormData.email}
                                                onChange={handleLoginChange}
                                                placeholder="your@email.com"
                                                required
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            Password
                                            <input
                                                className={"w-full px-4 py-2 border rounded-md border-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"}
                                                type="password"
                                                name="password"
                                                value={loginFormData.password}
                                                onChange={handleLoginChange}
                                                placeholder="••••••••••"
                                                required
                                            />
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className={"block mx-auto w-1/2 rounded-md bg-indigo-500 text-white hover:bg-indigo-400 transition-colors duration-200"}
                                    >
                                        {loading ? "Logging in..." : "Login"}
                                    </button>
                                </form>
                                <p className={"text-center"}>
                                    Don`t have an Account?
                                    <button
                                        onClick={()=>setShowRegister(true)}
                                        className={"hover:text-blue-700 underline"}
                                    >
                                        Sign up
                                    </button>
                                </p>
                                {message && (
                                    <p className={`text-center ${message.includes("successful") ? "text-green-600" : "text-red-600"}`}>
                                        {message}
                                    </p>
                                )}
                        </div>

                        <div
                            className={"w-full flex-shrink-0 p-7 pt-4 space-y-4 bg-gray-50"}
                        >
                            <h1 className={"text-2xl font-bold mb-6 text-center"}>
                                Register
                            </h1>
                            <form
                                onSubmit={handleRegisterSubmit}
                                className="space-y-4"
                            >
                                <div className={"flex flex-row space-x-2"}>
                                    <div>
                                        <p>Name</p>
                                        <input
                                            name="name"
                                            value={registerFormData.name}
                                            onChange={handleRegisterChange}
                                            className={"w-full px-4 py-2 border rounded-md border-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"}
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <p>Surname</p>
                                        <input
                                            name="surname"
                                            value={registerFormData.surname}
                                            onChange={handleRegisterChange}
                                            className={"w-full px-4 py-2 border rounded-md border-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"}
                                            placeholder="Your surname"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <p>E-mail</p>
                                    <input
                                        name="email"
                                        value={registerFormData.email}
                                        onChange={handleRegisterChange}
                                        className={"w-full px-4 py-2 border rounded-md border-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"}
                                        type="email"
                                        placeholder="your@gmail.com"
                                    />
                                </div>
                                <div>
                                    <p>Password</p>
                                    <input
                                        name="password"
                                        value={registerFormData.password}
                                        onChange={handleRegisterChange}
                                        className={"w-full px-4 py-2 border rounded-md border-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"}
                                        type="password"
                                        placeholder="••••••••••"
                                    />
                                </div>
                                <button
                                    className={"block mx-auto w-1/2 rounded-md bg-indigo-500 text-white hover:bg-indigo-400 transition-colors duration-200"}
                                    type="submit"
                                >
                                    {loading ? "Registering..." : "Register"}
                                </button>
                            </form>
                            <p className="text-center">
                                Already have an Account?
                                <button
                                    onClick={()=>setShowRegister(false)}
                                    className="text-blue-500 hover:text-blue-300 underline"
                                >
                                    Sign in
                                </button>
                            </p>
                            {message && (
                                <p className={`text-center ${message.includes("successful") ? "text-green-600" : "text-red-600"}`}>
                                    {message}
                                </p>
                            )}
                        </div>
                    </div>

                </div>
            </>
    )
}