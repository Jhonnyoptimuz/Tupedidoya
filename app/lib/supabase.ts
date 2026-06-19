import { createClient } from '@supabase/supabase-js';

// INYECCIÓN DIRECTA PARA PRUEBA
const supabaseUrl = "https://lkglxefarlnlslkjnijl.supabase.co";
const supabaseAnonKey = "TU_LLAVE_ANONIMA_AQUI"; // Pega aquí tu clave real

export const supabase = createClient(supabaseUrl, supabaseAnonKey);