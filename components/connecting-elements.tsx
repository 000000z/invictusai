export default function ConnectingElements() {
  return (
    <>
      {/* Vertical connecting lines - adjusted positioning and z-index */}
      <div className="fixed left-[2%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-green-500/10 to-transparent opacity-30 z-0"></div>
      <div className="fixed right-[2%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-green-500/10 to-transparent opacity-30 z-0"></div>

      {/* Diagonal connecting lines - reduced opacity and adjusted z-index */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[15%] -left-[10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-green-500/10 to-transparent opacity-20 rotate-[5deg]"></div>
        <div className="absolute top-[45%] -left-[10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-green-500/10 to-transparent opacity-20 rotate-[-3deg]"></div>
        <div className="absolute top-[75%] -left-[10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-green-500/10 to-transparent opacity-20 rotate-[4deg]"></div>
      </div>
    </>
  )
}
