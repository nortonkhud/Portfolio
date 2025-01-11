import React, { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const Avatar = () => {
  const [isError, setIsError] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      'https://models.readyplayer.me/avatarId.glb', // Path to your 3D model
      (gltf) => {
        // Handle 3D avatar loading here
        console.log('3D Avatar loaded:', gltf);
        // You can add the model to your Three.js scene here
      },
      undefined,
      (error) => {
        // Error loading 3D avatar
        console.error('Error loading 3D avatar', error);
        setIsError(true);
      }
    );

    if (!THREE.WebGLRenderer) {
      setIsSupported(false); // Fallback if WebGL is not supported
    }
  }, []);

  return (
    <div>
      {isSupported && !isError ? (
        // 3D avatar rendering logic here (e.g., in a <canvas>)
        <canvas id="avatarCanvas"></canvas>
      ) : (
        <img src="https://models.readyplayer.me" alt="Fallback Avatar" />
      )}
    </div>
  );
};

export default Avatar;
