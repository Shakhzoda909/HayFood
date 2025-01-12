import { Star, StarHalf } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useAuth } from "@/contexts/auth";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-[1180px] mx-auto w-full py-[15px] px-[20px] flex justify-between items-center">
      <h1 className="text-[40px] text-[#80ba04] font-bold">HAY FOOD</h1>
      <div>
        <div>
          <span className="text-[18px] text-black font-[500] leading-5">
            Yetkazib berish
          </span>
          <span className="text-[18px] text-[var(--lightgreen)] font-[500] leading-5 cursor-pointer">
            {" "}
            Toshkent
          </span>
        </div>
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex items-center gap-[5px]">
                <span>30 min - 4.8</span>
                <Star
                  className="cursor-pointer"
                  size={18}
                  color="#f7eb07"
                  fill="#f7eb07"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="flex gap-[20px] bg-gray-800 border-none border-0 text-white"
            >
              <div className="flex flex-col gap-[10px] py-2">
                <span className="text-[20px] font-[600]">30 Minut</span>
                <span className="text-[14px] font-[500] max-w-[200px]">Yetkazib berish o'rtacha vaqti</span>
                <span className="text-[14px] font-[500] max-w-[200px]">
                  Agar bu vaqtda yetkazib bera olmasak, yetkazib berish bepul
                  bo'ladi
                </span>
              </div>
              <div className="flex flex-col items-start gap-[5px]">
                <div className="flex items-center gap-[5px]">
                  <span>4.8</span>
                  <Star className="text-[#f7eb07]" size={18} fill="#f7eb07" />
                  <Star className="text-[#f7eb07]" size={18} fill="#f7eb07" />
                  <Star className="text-[#f7eb07]" size={18} fill="#f7eb07" />
                  <StarHalf className="text-[#f7eb07]" size={18} fill="#f7eb07" />
                </div>
                <span>100+ baholar</span>
                <span></span>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex flex-col items-start gap-[4px]">
        <span className="text-[18px] text-black font-[600] leading-5">
          0000
        </span>
        <span className="text-[14px] text-gray-400 font-[500] leading-5">
          Qo'ng'iroq bepul
        </span>
      </div>
      {user ? (
       <span>{user.name}</span>
      ) : (
        <button className="bg-lightgreen text-white px-[20px] py-[10px] rounded-[10px]">
          Kirish
        </button>
      )}
    </div>
  );
};

export default Navbar;
