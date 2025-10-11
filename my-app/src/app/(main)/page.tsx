import ScrollObserver from "@/components/Observers/scrollObserver";

export default function HomePage() {
    return (
        <>
            <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
                <main className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)]">

                    {/* Main hero section */}
                    <div className="flex flex-1 items-center justify-center pt-0 p-8 lg:p-16 min-h-[80vh]">
                        <h1
                            id="title"
                            className="text-5xl font-bold text-center leading-tight sm:text-6xl md:text-7xl lg:text-8xl animate-scaleUp text-gray-900"
                        >
                            Welcome to AboutMe
                        </h1>
                    </div>

                    {/* Info sidebar */}
                    <aside className="flex flex-none lg:w-1/3 items-center justify-center p-14 bg-white lg:bg-gray-100 border-t lg:border-t-0 lg:border-l border-gray-200">
                        <ScrollObserver>
                            <div className="max-w-prose">
                                <p className="text-base text-gray-600 leading-relaxed">
                                    <strong className="text-2xl">AboutMe</strong> is a dynamic app designed to help you build a personalized page that showcases your identity, interests, and professional life. Think of it as your own digital space, a central hub where you can curate and present everything that defines you. Whether you're a student, a professional, a creative, or an entrepreneur, AboutMe gives you the tools to create a compelling and authentic online presence.
                                </p>
                            </div>
                        </ScrollObserver>
                    </aside>

                </main>
            </div>
        </>
    );
}