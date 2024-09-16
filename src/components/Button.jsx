
function Button({ text,className,disabled}) {
  return (
    <button className={`bg-black text-white px-6 py-4 w-fit font-bold uppercase hover:bg-slate-800 ${className}`} disabled={disabled}>{text}</button>
  )
}

export default Button
