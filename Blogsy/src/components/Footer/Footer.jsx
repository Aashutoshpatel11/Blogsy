import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 rounded-t-3xl text-black bg-blue-300 backdrop-blur-2xl bg-opacity-10 border-t-4">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-4/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm">
                                    &copy; Copyright 2023. All Rights Reserved by Aashutosh Patel.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12 ">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase hover:underline hover:text-blue-500 underline-offset-1">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium hover:underline hover:text-blue-500 underline-offset-1"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium hover:underline hover:text-blue-500 underline-offset-1"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium hover:underline hover:text-blue-500 underline-offset-1"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium hover:underline hover:text-blue-500 underline-offset-1"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase hover:underline hover:text-blue-500 underline-offset-1">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium hover:underline hover:text-blue-500 underline-offset-1"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium hover:underline hover:text-blue-500 underline-offset-1"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium hover:underline hover:text-blue-500 underline-offset-1"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium hover:underline hover:text-blue-500 underline-offset-1"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase hover:underline hover:text-blue-500 underline-offset-1">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium hover:underline hover:text-blue-500 underline-offset-1"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium hover:underline hover:text-blue-500 underline-offset-1"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium hover:underline hover:text-blue-500 underline-offset-1"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase hover:underline hover:text-blue-500 underline-offset-1">
                                Connect
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/Aashutoshpatel11"  // <-- replace with your GitHub URL
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-base font-medium hover:underline hover:text-blue-500 underline-offset-1"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="https://www.linkedin.com/in/aashutosh-patel-a318982b2/"  // <-- replace with your GitHub URL
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-base font-medium hover:underline hover:text-blue-500 underline-offset-1"
                                    >
                                        LinkedIN
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer;