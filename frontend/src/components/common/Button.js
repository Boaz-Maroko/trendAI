export default function Button({ children, type = "button", className = "", ...props }) {
    return (
      <button
        type={type}
        className={`bg-blue-500 hover:bg-blue-400 text-white font-medium py-2 px-4 rounded transition ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
