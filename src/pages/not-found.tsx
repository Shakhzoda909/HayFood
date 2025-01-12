import { useRef } from "react";

const NotFound = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center text-center text-2xl font-bold">
      <input ref={inputRef} type="text" placeholder="Enter text" className="border-2 border-gray-300 rounded-md p-2"/>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default NotFound