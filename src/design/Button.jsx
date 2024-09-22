
function Button({ text,className,type,disabled}) {
  return (
    <button className={`bg-black text-white px-6 py-4 w-fit font-bold uppercase hover:bg-slate-800 ${className}`} disabled={disabled} type={type}>{text}</button>
  )
}

export default Button
