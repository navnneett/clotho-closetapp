import { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import Head from 'next/head';

export default function SplineComponent() {
    // Create a reference for the canvas
    const canvasRef = useRef(null);

    useEffect(() => {
        // Ensure the canvas exists before creating the Spline Application
        if (canvasRef.current) {
            const app = new Application(canvasRef.current); // Create the Spline application
            app.load('https://prod.spline.design/Dgcmid8if7EA-5WM/scene.splinecode'); // Load the Spline scene
        }
    }, []); // Only run once after the component mounts

    return (
        <>
            <Head title="Home" description="Homepage of Clotho." />

            <div>
                <BottomNavigation
                    bgColorCommunity="var(--button-highlight-light)"
                    pathColorCommunity="var(--white)"
                    borderStyle="60%"
                    iconWidth={36}
                    iconHeight={36}
                />
            </div>

            <main className={styles.main}>
            <canvas
                id="canvas3d"
                ref={canvasRef} // Set the ref to the canvas
                style={{ width: '100%', height: '700px', border: 'none' }} // Set the canvas style
            />

            
            </main>
        </>
    );
}
