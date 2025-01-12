import { Star } from "lucide-react"

const Navbar = () => {
  return (
    <div className="max-w-[1180px] mx-auto py-[15px] px-[20px] flex justify-between items-center">
      <h1 className="text-[40px] text-[#80ba04] font-bold">HAY FOOD</h1>
      <div>
        <div>
          <span className="text-[18px] text-black font-[500] leading-5">Yetkazib berish</span> 
          <span className="text-[18px] text-[var(--lightgreen)] font-[500] leading-5 cursor-pointer"> Toshkent</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <span>40 min - 4.8</span>
          <Star className="cursor-pointer" size={18} color="#f7eb07" fill="#f7eb07"/>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[4px]">
        <span className="text-[18px] text-black font-[600] leading-5">0000</span>
        <span className="text-[14px] text-gray-400 font-[500] leading-5">Qo'ng'iroq bepul</span>
      </div>
      <button className="bg-lightgreen text-white px-[20px] py-[10px] rounded-[10px]">
        Kirish
      </button>
    </div>
  )
}

export default Navbar
