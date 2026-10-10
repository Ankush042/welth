"use client";
import Link from "next/link";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "./button";

const HeroSection = () => {

const imageRef=useRef();
useEffect(()=>{
    const imageElement=imageRef.current;

    const handleScroll=()=>{
        const scrollPosition=window.scrollY;
        const scrollThreshold=100;

        if(scrollPosition>scrollThreshold)
        {
            imageElement.classList.add("scrolled");
        }
        else{
            imageElement.classList.remove("scrolled");
        }
    };

    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll);
},[]);

    return (
        <div className="pb-20 px-40">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl md:text-8xl lg:text-[92px] pb-6 bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Manage your Finance <br />with Intelligence
                </h1>

                <p className="text-xl text-grey-600 mb-8 max-w-2xl mx-auto">
                    An AI-poered financial management platform that help you
                    track,
                    analyze,and optimize your spendind with real-time insights.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link href="/dashboard">
                        <Button size="lg" className="px-8 "> Get started</Button>
                    </Link>
                    <Link href="">
                        <Button size="lg" variant="outline" className="px-8 "> Watch Demo</Button>
                    </Link>
                </div>
                <div className="hero-image-wrapper">
                    <div ref={imageRef} className="hero-image">
                        <Image src="/banner.jpeg" width={1280} height={720}
                            alt="Dashboard preview"
                            className="rounded-lg shadow-2xl border mx-auto"
                            priority />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection