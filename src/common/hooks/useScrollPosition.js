import { useEffect, useState } from 'react';

    
    function useScrollPosition() {
        const [viewPos, setViewPos] = useState(0);
        useEffect(() => {
          function handleMovement() {
              setViewPos(window.scrollY)
          }
          window.addEventListener("scroll", handleMovement);
          handleMovement();
          return () => window.removeEventListener("scroll", handleMovement);
          }, []); 
        return viewPos;
    }

    export default useScrollPosition



