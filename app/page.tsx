"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://lkglxefarlnlslkjnijl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZ2x4ZWZhcmxubHNsa2puaWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0MzM2NDgsImV4cCI6MjA5NzAwOTY0OH0.E6fpSNh0dUxDFU26xO4QmnkF2OdhYSwpBwTaR-xayTc"
);

export default function Page() {
  const [productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from('Productos').select('*');
      setProductos(data || []);
    }
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">Menú Peluso</h1>
        <p className="text-slate-500 mt-3 text-lg">Sabores inolvidables en tu mesa</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {productos.map((item) => (
          <div 
            key={item.id} 
            className="group bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            <div className="relative overflow-hidden h-64">
              <img 
                src={item.image_url || "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=500&auto=format&fit=crop"} 
                alt={item.nombre} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                <span className="text-slate-900 font-bold text-lg">${item.precio}</span>
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-black text-slate-900 mb-2">{item.nombre}</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 h-12 overflow-hidden">{item.descripcion}</p>
              
              <button className="w-full bg-slate-900 text-white py-3 rounded-2xl font-bold text-lg hover:bg-orange-600 active:scale-95 transition-all shadow-lg shadow-orange-500/20">
                Agregar al Pedido
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}