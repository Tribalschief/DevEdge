'use client'

import { Canvas, useFrame  } from '@react-three/fiber'
import { Mesh } from 'three';
import { OrbitControls, Float, Html, useTexture, MeshDistortMaterial, Environment, Stars } from '@react-three/drei'
import { Suspense, useRef, useState, useEffect } from 'react'
import { Vector3 } from 'three'
import { useCornerPositions } from '@/helper/useCornerPositions';

// Responsive shape component with interactive abilities
const ResponsiveShape = ({ position, color, shape, size, distortFactor = 0.4, speed = 1 }:any) => {
    const mesh = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  
  // Make shapes react to user interaction
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01 * speed
      if (hovered) {
        mesh.current.scale.lerp(new Vector3(1.2, 1.2, 1.2), 0.1)
      } else {
        mesh.current.scale.lerp(new Vector3(1, 1, 1), 0.1)
      }
    }
  })

  // Create appropriate geometry based on shape type
  const Geometry = () => {
    switch(shape) {
      case 'box':
        return <boxGeometry args={size} />
      case 'sphere':
        return <sphereGeometry args={size} />
      case 'torus':
        return <torusGeometry args={size} />
      case 'octahedron':
        return <octahedronGeometry args={[size[0]]} />
      default:
        return <boxGeometry args={size} />
    }
  }

  return (
    <Float 
      speed={speed} 
      rotationIntensity={hovered ? 2 : 0.8} 
      floatIntensity={hovered ? 2 : 1}
    >
      <mesh
        ref={mesh}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
        scale={clicked ? 1.2 : 1}
      >
        <Geometry />
        <MeshDistortMaterial
          color={clicked ? '#ffffff' : color}
          emissive={clicked ? color : '#000000'}
          emissiveIntensity={clicked ? 0.5 : 0}
          roughness={0.2}
          metalness={0.8}
          speed={hovered ? 5 : 2}
          distort={hovered ? distortFactor * 1.5 : distortFactor}
        />
      </mesh>
    </Float>
  )
}

// Responsive layout manager
const ResponsiveLayout = () => {
    const { topLeft, topRight, bottomLeft, bottomRight } = useCornerPositions();
  
    return (
      <>
        <ResponsiveShape
          position={topLeft}
          color="#6208CA"
          shape="box"
          size={[0.5, 0.5, 0.5]} // smaller size
          distortFactor={0.2}
          speed={1.2}
        />
        <ResponsiveShape 
          position={topRight}
          color="#6208CA"
          shape="box"
          size={[0.5, 0.5, 0.5]}
          distortFactor={0.2}
          speed={0.8}
        />
        <ResponsiveShape 
          position={bottomLeft}
          color="#6208CA"
          shape="box"
          size={[0.5, 0.5, 0.5]}
          distortFactor={0.2}
          speed={1.5}
        />
        <ResponsiveShape 
          position={bottomRight}
          color="#6208CA"
          shape="box"
          size={[0.5, 0.5, 0.5]}
          distortFactor={0.2}
          speed={1}
        />
      </>
    );
  }

// Info panel component


// Main component
export default function InteractiveScene() {
  return (
    <div className="scene-container" style={{ width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <ResponsiveLayout />
          
          <OrbitControls enableZoom={true} enablePan={true} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}