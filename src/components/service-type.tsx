import { Pen } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const ServiceType = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Tabs
        defaultValue="account"
        className="flex justify-between items-center gap-[40px]"
      >
        <TabsList className="rounded-3xl h-[50px]">
          <TabsTrigger
            value="account"
            className="w-[200px] py-[10px] text-center rounded-3xl"
          >
            Yetkazib berish
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="w-[200px] py-[10px] text-center rounded-3xl"
          >
            Olib ketish
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="account"
          className="w-full bg-red-50 border rounded-xl text-red-500 py-[10px] px-[16px] mt-0 cursor-pointer"
        >
          <div className="flex justify-between items-center gap-[10px]">
            <span className="text-[16px]">
              Yetkazib berish manzilini tanlang!
            </span>
            <Pen className="w-[14px] h-[14px]" />
          </div>
        </TabsContent>
        <TabsContent
          value="password"
          className="w-full bg-red-50 border rounded-xl text-red-500 py-[10px] px-[16px] mt-0 cursor-pointer"
        >
          <div className="flex justify-between items-center gap-[10px]">
            <span className="text-[16px]">
              Olib ketish manzilini tanlang!
            </span>
            <Pen className="w-[14px] h-[14px]" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ServiceType;
