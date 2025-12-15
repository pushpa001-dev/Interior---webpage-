"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const containerRef = useRef<HTMLElement>(null);
    const squareRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const mobileTextRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from(squareRef.current, {
            scale: 0,
            duration: 1.5,
            delay: 1,
            ease: "elastic.out(1, 0.5)",
            transformOrigin: "center center"
        })
            .from(imageRef.current, {
                scale: 1.2,
                opacity: 0,
                duration: 1,
            }, "-=1")
            .from(titleRef.current, {
                x: -100,
                opacity: 0,
                duration: 1,
            }, "-=0.5")
            .from(subRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.8,
            }, "-=0.8")
            .from([textRef.current, mobileTextRef.current], {
                x: 50,
                opacity: 0,
                duration: 1,
            }, "-=0.6");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center p-4">
            {/* Central Container using the square as reference */}
            <div className="relative w-full max-w-[350px] md:max-w-[450px] 2xl:max-w-[750px] aspect-square">

                {/* Red Square Background */}
                <div ref={squareRef} className="absolute inset-0 bg-[#FF5A5A] z-10 flex items-center justify-center">
                    {/* Circular Image Cutout */}
                    <div ref={imageRef} className="relative w-[90%] h-[90%] rounded-full overflow-hidden shadow-inner">
                        <Image
                            src="/hero.jpeg"
                            alt="Dark modern bedroom interior with posters"
                            fill
                            className="object-cover saturate-0"
                            priority
                        />
                    </div>
                </div>

                {/* Left Text - UNIK */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-[20%] md:-left-[45%] lg:-left-[55%] z-20 pointer-events-none">
                    <h1 ref={titleRef} className="text-white text-[5rem] md:text-[9rem] lg:text-[11rem] font-extrabold leading-none tracking-tighter mix-blend-normal font-[family-name:var(--font-syne)] uppercase">
                        UNIK
                    </h1>
                    <p ref={subRef} className="text-white/90 text-sm md:text-lg font-light mt-2 max-w-[200px] md:max-w-[300px] font-[family-name:var(--font-playfair)] tracking-wide">
                        interior designs that feel like vintage modern
                    </p>
                </div>

                {/* Right Text - Paragraph */}
                <div ref={textRef} className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-[40%] lg:-right-[60%] 2xl:-right-[40%] z-20 w-[200px] lg:w-[280px]">
                    <p className="text-white text-sm lg:text-lg font-[family-name:var(--font-playfair)] leading-relaxed text-left md:text-justify">
                        In the world where there all robot like interiors and heartless meanings we are there to fill the gap.
                    </p>
                </div>
            </div>

            {/* Mobile Right Text (Appears below square on mobile) */}
            <div ref={mobileTextRef} className="md:hidden absolute bottom-10 left-0 right-0 p-8 text-center">
                <p className="text-white/80 text-sm font-[family-name:var(--font-playfair)] leading-relaxed">
                    In the world where there all robot like interiors and heartless meanings we are there to fill the gap.
                </p>
            </div>
        </section>
    );
};

export default Hero;
