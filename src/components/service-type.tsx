import { Pen } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/contexts/auth";



const ServiceType = () => {
  const { user } = useAuth()
  const { toast } = useToast()
  const [addresses, setAddresses] = useState<string[]>([]);
  const [addressName, setAddressName] = useState("");
  const [addAddress, setAddAddress] = useState(false);
  const [myAddress, setMyAddress] = useState(false);

  const handleAddAddress = () => {

    setAddresses([...addresses, addressName]);
    setAddressName("");
    setAddAddress(false);
    toast({
      title: "Manzil qo'shildi",
      description: "Manzil qo'shildi",

    })

  }
  const handleClick = () => {
    if (!user) {
      toast({
        title: "Manzil qo'shish uchun login qiling",
        variant: "destructive",
      })
    }
  }
  console.log(addresses);
  console.log(user);

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

          >
            <Dialog open={myAddress} onOpenChange={setMyAddress}>


              <div onClick={handleClick} className="flex justify-between items-center gap-[10px]">
                <span className="text-[16px] ">
                  Yetkazib berish manzilini tanlang!
                </span>
                <Pen className="w-[14px] h-[14px]" />
              </div>

              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-left"> Yetkazib berish manzilini tanlang</DialogTitle>

                </DialogHeader>
                {addresses.map((address) => (
                  <div key={address}>
                    <span>{address}</span>
                  </div>
                ))}
                <Button variant={"default"} onClick={() => setAddAddress(true)}>
                  Yangi manzil qo'shish
                </Button>
              </DialogContent>
            </Dialog>
          </div>
          <Dialog open={addAddress} onOpenChange={setAddAddress}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Yangi manzil qo'shish</DialogTitle>
              </DialogHeader>
              <Label>Manzil nomi</Label>
              <Input placeholder="Manzil nomi" value={addressName} onChange={(e) => setAddressName(e.target.value)} />
              <DialogFooter>
                <Button variant={"default"} onClick={handleAddAddress} disabled={!addressName}>Saqlash </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
