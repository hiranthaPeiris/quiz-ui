function ProgressBar({ progress }) {
    return (
      <div className="h-2 bg-gray-300 w-full rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-blue-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  }
  
  export default ProgressBar;
  