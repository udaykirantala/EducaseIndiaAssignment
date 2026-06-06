import './MobileContainer.css'

export const MobileContainer = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="mobile">{children}</div>
    </div>
  );
};