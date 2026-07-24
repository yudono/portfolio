import React, { useEffect, useRef, useState } from "react";

interface SquaresProps {
  direction?: "up" | "down" | "left" | "right" | "diagonal";
  speed?: number;
  borderColor?: string;
  hoverFillColor?: string;
  squareSize?: number;
}

const Squares: React.FC<SquaresProps> = ({
  direction = "right",
  speed = 0.5,
  borderColor = "rgba(63, 63, 70, 0.15)", // zinc-800 subtle
  hoverFillColor = "rgba(16, 185, 129, 0.08)", // emerald/blue subtle
  squareSize = 40,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoveredSquare, setHoveredSquare] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Shift grid position for infinite scrolling background animation
      if (direction === "right") {
        offsetRef.current.x = (offsetRef.current.x - speed) % squareSize;
      } else if (direction === "left") {
        offsetRef.current.x = (offsetRef.current.x + speed) % squareSize;
      } else if (direction === "down") {
        offsetRef.current.y = (offsetRef.current.y - speed) % squareSize;
      } else if (direction === "up") {
        offsetRef.current.y = (offsetRef.current.y + speed) % squareSize;
      } else if (direction === "diagonal") {
        offsetRef.current.x = (offsetRef.current.x - speed) % squareSize;
        offsetRef.current.y = (offsetRef.current.y - speed) % squareSize;
      }

      const startX = offsetRef.current.x - squareSize;
      const startY = offsetRef.current.y - squareSize;

      // Draw Grid Squares
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;

      for (let x = startX; x < width + squareSize; x += squareSize) {
        for (let y = startY; y < height + squareSize; y += squareSize) {
          ctx.strokeRect(x, y, squareSize, squareSize);

          // Highlight the square currently hovered by the user cursor
          if (hoveredSquare) {
            const gridX =
              Math.floor((hoveredSquare.x - offsetRef.current.x) / squareSize) *
                squareSize +
              offsetRef.current.x;
            const gridY =
              Math.floor((hoveredSquare.y - offsetRef.current.y) / squareSize) *
                squareSize +
              offsetRef.current.y;

            // Check if current rect coords matches hovered grid cell
            if (Math.abs(x - gridX) < 1 && Math.abs(y - gridY) < 1) {
              ctx.fillStyle = hoverFillColor;
              ctx.fillRect(x + 1, y + 1, squareSize - 2, squareSize - 2);
            }
          }
        }
      }

      // Draw random squares twinkle effect (ReactBits Squares feature)
      const numTwinkles = 4;
      ctx.fillStyle = hoverFillColor;
      for (let i = 0; i < numTwinkles; i++) {
        const randomX =
          startX +
          Math.floor(Math.random() * (width / squareSize + 2)) * squareSize;
        const randomY =
          startY +
          Math.floor(Math.random() * (height / squareSize + 2)) * squareSize;
        ctx.fillRect(randomX + 1, randomY + 1, squareSize - 2, squareSize - 2);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [
    direction,
    speed,
    borderColor,
    hoverFillColor,
    squareSize,
    hoveredSquare,
  ]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoveredSquare({ x, y });
  };

  const handleMouseLeave = () => {
    setHoveredSquare(null);
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 w-full h-full pointer-events-auto"
    />
  );
};

export default Squares;
