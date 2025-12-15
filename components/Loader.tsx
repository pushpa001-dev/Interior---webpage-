'use client'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const Loader = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const blindsRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        // Reveal Text
        tl.from(textRef.current?.children || [], {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out"
        })
            .to(textRef.current, {
                yPercent: -100,
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
                delay: 0
            })
            .to(blindsRef.current?.children || [], {
                scaleY: 0,
                transformOrigin: "top",
                duration: 0.5,
                stagger: 0.1,
                ease: "power3.inOut"
            }, "-=0.2")
            .to(containerRef.current, {
                display: 'none',
                duration: 0
            })

    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="fixed inset-0 z-[100] pointer-events-none">
            {/* Text Container */}
            <div className="absolute inset-0 z-20 flex items-center justify-center overflow-hidden">
                <div ref={textRef} className="flex">
                    {['U', 'N', 'I', 'K'].map((char, index) => (
                        <span key={index} className="text-[#FF5A5A] text-[15vw] md:text-[10vw] font-extrabold font-[family-name:var(--font-syne)] uppercase tracking-tighter inline-block">
                            {char}
                        </span>
                    ))}
                </div>
            </div>

            {/* Blinds Background */}
            <div ref={blindsRef} className="absolute inset-0 z-10 flex w-full h-full">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-full w-1/5 bg-black border-r border-neutral-900/50 last:border-none"></div>
                ))}
            </div>
        </div>
    )
}

export default Loader
