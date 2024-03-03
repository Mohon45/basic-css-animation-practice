import "../../test2.css";

const RotateContent = () => {
  const calculatePosition = (index, totalIcons) => {
    const angle = (360 / totalIcons) * index;
    const radius = 150; // Adjust radius as needed
    const centerX = 200; // Adjust center x-coordinate as needed
    const centerY = 200; // Adjust center y-coordinate as needed
    const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
    const y = centerY + radius * Math.sin((angle * Math.PI) / 180);
    return { x, y };
  };
  return (
    <div className="container">
      <div className="centerImage">
        {/* Placeholder for your central image */}
        <img src="https://web.programming-hero.com/static/media/tailwind.01c486e6.svg" alt="Central Image" />
      </div>
      <div className="iconsContainer">
        {/* Map over each icon and calculate its position */}
        {Array.from({ length: 6 }).map((_, index) => {
          const position = calculatePosition(index, 6);
          return (
            <div key={index} className="icon" style={{ top: position.y, left: position.x }}>
              {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RotateContent;
