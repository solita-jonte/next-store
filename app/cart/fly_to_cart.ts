'use client';

import { useCallback } from "react";
import gsap from "gsap";

export function useFlyToCart(cartRef: React.RefObject<HTMLElement | null>) {
    const flyToCart = useCallback(
        (imageElem: HTMLImageElement) => {
            if (!imageElem || !cartRef.current) {
                return;
            }
            const start = imageElem.getBoundingClientRect();
            const end = cartRef.current.getBoundingClientRect();

            const clone = imageElem.cloneNode(true) as HTMLImageElement;
            document.body.appendChild(clone);

            // swoosh to cart
            gsap.set(clone, {
                position: "fixed",
                left: start.left,
                top: start.top,
                width: start.width,
                height: start.height,
                zIndex: 50,
                pointerEvents: "none",
            });
            const midX = (start.left + end.left) * 0.5;
            const midY = start.top + 50;
            gsap.to(clone, {
                duration: 0.8,
                ease: "power2.inOut",
                keyframes: [
                    {
                        x: midX - start.left,
                        y: midY - start.top,
                        scale: 0.7,
                    },
                    {
                        x: end.left - start.left - start.width*0.15,
                        y: end.top - start.top - start.height*0.3,
                        scale: 0.3,
                        opacity: 0.5,
                    },
                ],
                onComplete: () => {
                    clone.remove();
                },
            });

        },
        [cartRef]
    );
    return { flyToCart };
}
