const ShinyText = ({
  text,
  disabled = false,
  speed = 5,
  className = '',
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span className={`relative inline-block font-bold ${className}`}>
      {/* Blue Text */}
      <span className="text-blue-500">{text}</span>

      {/* Shine overlay */}
      {!disabled && (
        <span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-70 mix-blend-screen animate-shine"
          style={{
            backgroundSize: '50% 100%',
            animationDuration: animationDuration,
          }}
        ></span>
      )}
    </span>
  );
};

export default ShinyText;
