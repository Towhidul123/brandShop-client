

const Member = () => {
    return (


        <div >
            <div>
                <h2 className="text-3xl font-bold text-center py-10">Choose a membership <br />to fit your needs</h2>
            </div>

            <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center">

                <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                    <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
                        <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                            Basic
                        </p>
                        <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                            <span className="mt-2 text-4xl">$</span>14
                            <span className="self-end text-4xl">/mo</span>
                        </h1>
                    </div>
                    <div className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-3 w-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                Rental duration: Typically 1 to 7 days.
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-3 w-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                Standard mileage limit.
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-3 w-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                Basic insurance coverage.
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-3 w-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                Additional mileage allowance.
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-3 w-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                GPS navigation system.
                                </p>
                            </li>

                        </ul>
                    </div>
                    <div className="mt-auto p-0">
                        <button
                            className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>

                <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                    <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
                        <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                            Monthly
                        </p>
                        <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                            <span className="mt-2 text-4xl">$</span>59
                            <span className="self-end text-4xl">/mo</span>
                        </h1>
                    </div>
                    <div className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-3 w-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                Rental duration: 30 days or more.
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-3 w-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                Higher mileage allowance compared to the Basic package.
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-3 w-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                Comprehensive insurance coverage.
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-3 w-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                Potential cost savings compared to daily or weekly rates.
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-3 w-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                Flexibility to keep the car for an extended period without the need for frequent renewals.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto p-0">
                        <button
                            className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>

                <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                    <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
                        <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                            Annual
                        </p>
                        <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                            <span className="mt-2 text-4xl">$</span>799
                            <span className="self-end text-4xl">/mo</span>
                        </h1>
                    </div>
                    <div className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-3 w-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                Rental duration: 365 days.
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-3 w-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                Generous mileage allowance.
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-3 w-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                    Priority booking for popular classes and workshops
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-3 w-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                Comprehensive insurance coverage.
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-3 w-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                Regular maintenance and servicing.
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-3 w-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                Significant cost savings compared to shorter-term packages.
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-3 w-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                No need for monthly renewals or contract extensions.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto p-0">
                        <button
                            className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>


            </div>





        </div>
    );
};

export default Member;