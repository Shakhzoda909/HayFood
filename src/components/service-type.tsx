import { Pen } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useState } from "react";

const ServiceType = () => {
  const [showCities, setShowCities] = useState(false);

  const cities = [
    "Toshkent",
    "Samarqand",
    "Buxoro",
    "Andijon",
    "Namangan",
    "Farg'ona",
  ];

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
          className="w-full mt-0"
        >
          <div
            className="bg-red-50 border rounded-xl text-red-500 py-[10px] px-[16px] cursor-pointer"
            onClick={() => setShowCities(!showCities)}
          >
            <div className="flex justify-between items-center gap-[10px]">
              <span className="text-[16px]">
                Yetkazib berish manzilini tanlang!
              </span>
              <Pen className="w-[14px] h-[14px]" />
            </div>
          </div>

          {showCities && (
            <div className="mt-2 border rounded-xl p-4">
              <ul className="space-y-2">
                {cities.map((city) => (
                  <li
                    key={city}
                    className="cursor-pointer hover:text-red-500 transition-colors"
                    onClick={() => {
                      setShowCities(false);
                    }}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
