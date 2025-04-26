
import { useEffect, useState } from 'react'

export const useCornerPositions = () => {
  const [positions, setPositions] = useState({
    topLeft: [-2, 2, 0],
    topRight: [2, 2, 0],
    bottomLeft: [-2, -2, 0],
    bottomRight: [2, -2, 0],
  });

  useEffect(() => {
    const updatePositions = () => {
      const aspect = window.innerWidth / window.innerHeight;
      const height = 2 * Math.tan((75 * Math.PI) / 360) * 5; // fov=75, distance=5
      const width = height * aspect;

      const x = width / 2 - 1;
      const y = height / 2 - 1;

      setPositions({
        topLeft: [-x, y, 0],
        topRight: [x, y, 0],
        bottomLeft: [-x, -y, 0],
        bottomRight: [x, -y, 0],
      });
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, []);

  return positions;
};
