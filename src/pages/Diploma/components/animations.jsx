// Animation keyframes that will be shared across components
export const animationStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(5deg); }
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes slideIn {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(100px); }
  }
  @keyframes rise {
    0%, 100% { transform: translateY(0) scale(1); opacity: 0.2; }
    50% { transform: translateY(-20px) scale(0.8); opacity: 0.1; }
  }
  @keyframes slideRight {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(40px); }
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }
  @keyframes rotateAndMove {
    0% { transform: rotate(0deg) translateX(0); }
    25% { transform: rotate(90deg) translateX(10px); }
    50% { transform: rotate(180deg) translateX(0); }
    75% { transform: rotate(270deg) translateX(-10px); }
    100% { transform: rotate(360deg) translateX(0); }
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.1; }
    50% { transform: scale(1.1); opacity: 0.2; }
  }
`;
