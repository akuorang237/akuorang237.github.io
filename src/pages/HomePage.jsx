
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";
import { Flame, Search } from "lucide-react";
import GameDetail from "@/components/GameDetail";

const games = [
  { name: "Mobile Legends", discount: "-6%", img: "/images/mlbb.jpg" },
  { name: "Bigo Live", discount: "-7%", img: "/images/bigo.jpg" },
  { name: "Free Fire", discount: "-39%", img: "/images/freefire.jpg" },
  { name: "Lapakgaming Coins Rewards", discount: null, img: "/images/rewards.jpg" },
  { name: "Honor of Kings", discount: null, img: "/images/honor.jpg" },
  { name: "Genshin Impact", discount: null, img: "/images/genshin.jpg" },
  { name: "PUBG Mobile", discount: "-16%", img: "/images/pubg.jpg" },
  { name: "Honkai: Star Rail", discount: "-17%", img: "/images/starrail.jpg" },
  { name: "Zenless Zone Zero", discount: "-50%", img: "/images/zzz.jpg" },
];

export default function HomePage() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 p-4">
      <div className="max-w-screen-xl mx-auto">
        {!selectedGame ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <div className="relative w-full max-w-md">
                <Search className="absolute top-2.5 left-2.5 text-gray-400" />
                <Input placeholder="Cari Game..." className="pl-10" />
              </div>
              <Button className="ml-4 px-6">Masuk</Button>
            </div>

            <Tabs defaultValue="populer">
              <TabsList className="mb-6 flex flex-wrap gap-2">
                <TabsTrigger value="populer" className="flex items-center gap-1">
                  <Flame size={16} /> Lagi Populer
                </TabsTrigger>
                <TabsTrigger value="topup">Top Up Langsung</TabsTrigger>
                <TabsTrigger value="voucher">Voucher</TabsTrigger>
                <TabsTrigger value="pulsa">Pulsa</TabsTrigger>
                <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
                <TabsTrigger value="baru" className="bg-yellow-400 text-black">Baru Rilis</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {games.map((game, i) => (
                <Card key={i} onClick={() => setSelectedGame(game)} className="relative hover:shadow-xl cursor-pointer">
                  {game.discount && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      {game.discount}
                    </div>
                  )}
                  <img src={game.img} alt={game.name} className="w-full h-32 object-cover rounded-t" />
                  <CardContent className="p-2 text-center font-semibold">{game.name}</CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <GameDetail game={selectedGame} onBack={() => setSelectedGame(null)} />
        )}
      </div>
    </div>
  );
}
