export default function LoginForm() {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="flex flex-col space-y-4 max-w-md w-full items-center justify-center border rounded-2xl p-8 shadow-lg">
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center" >Sign in</h1>
                        <div>
                            <p>E-mail</p>
                            <input className="w-full px-4 py-2 border rounded-md border-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none trasition-all" type="text" placeholder="your@email.com" />
                        </div>
                        <div>
                            <p>Password</p>
                            <input className="w-full px-4 py-2 border rounded-md border-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none trasition-all" type="password" placeholder="Enter your password" />
                        </div>
                        <button className="w-full rounded-md bg-indigo-500 text-white">Login</button>
                        <p>Don`t have an Account?
                            <a className="text-blue-500 hover:text-blue-300" href={"register"}> Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}