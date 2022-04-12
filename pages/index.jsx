import Head from 'next/head'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Abe from '../components/Abedance'
/** The suspense-hook is not really needed here, but to ensure it will work on more devices I have added it. */

export default function Home() {
  return (
    <>
      <Head>
        <title>Dancing Abe</title>
        <meta name="ThreeJS with NextJS" content="Abe dancing a silly dance" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Canvas
        // camera={{ position: [-5, 2, 10], fov: 30 }}
        style={{ height: "100vh" }}
      >

        <OrbitControls />
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={null}>
          <Abe />
        </Suspense>
      </Canvas>
    </>
  )
}
