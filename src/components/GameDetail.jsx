
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "./ui/select";

export default function GameDetail({ game, onBack }) {
  const [payment, setPayment] = useState("DANA");
  const [server, setServer] = useState("Asia");

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <Button onClick={onBack} className="mb-4">⬅ Kembali</Button>
      <h2 className="text-xl font-bold mb-4">Top Up {game.name}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {[
          { name: "GoPay", price: "Rp12.816" },
          { name: "DANA", price: "Rp12.816" },
          { name: "OVO", price: "Rp12.816" },
          { name: "QRIS", price: "Rp12.815", label: "Termurah" },
          { name: "LinkAja", price: "Rp12.816" },
          { name: "ShopeePay", price: "Rp12.816" },
          { name: "AstraPay", price: "Rp12.816" },
        ].map((p, idx) => (
          <div
            key={idx}
            className={`border rounded p-2 cursor-pointer ${payment === p.name ? "border-blue-500" : ""}`}
            onClick={() => setPayment(p.name)}
          >
            <div className="flex justify-between items-center">
              <span>{p.name}</span>
              <span className="font-bold text-sm">{p.price}</span>
            </div>
            {p.label && <span className="text-red-500 text-xs">{p.label}</span>}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">Masukkan detail akun</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Input placeholder="User ID" />
        <Select onValueChange={setServer} defaultValue={server}>
          <SelectTrigger>
            <SelectValue placeholder="Pilih Server" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Asia">Asia</SelectItem>
            <SelectItem value="Europe">Europe</SelectItem>
            <SelectItem value="America">America</SelectItem>
            <SelectItem value="TW/HK/MO">TW/HK/MO</SelectItem>
            <SelectItem value="SEA">SEA</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <h2 className="text-xl font-bold mb-2">Masukkan info kontak</h2>
      <Input placeholder="Email (opsional)" className="mb-4" />

      <h2 className="text-xl font-bold mb-2">Punya kode promo?</h2>
      <div className="flex gap-2 mb-6">
        <Input placeholder="Masukkan kode promo" />
        <Button variant="outline">Gunakan</Button>
      </div>

      <div className="border-t pt-4 flex justify-between items-center">
        <div>
          <p className="text-lg font-bold text-red-600">Rp12.816</p>
          <p className="text-sm text-gray-500">60 Monochrome, {payment}</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700 text-white px-6">Bayar Sekarang</Button>
      </div>
    </div>
  );
}
