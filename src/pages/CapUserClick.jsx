export default function CapUserClick() {
  return (
    <section className='h-screen grid'>
    <button
      onClick={() => alert("Clicked!")} 
      className="px-8 rounded-sm py-3 m-auto bg-blue-500 text-white font-semibold"
    >
    Click Me!
    </button>
    </section>
  )
}
