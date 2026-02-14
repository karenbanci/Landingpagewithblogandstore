import { createClient } from '@supabase/supabase-js';

// Substitua estas variáveis com suas credenciais do Supabase
// Obtenha em: https://app.supabase.com/project/_/settings/api
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTI4MDAsImV4cCI6MTk2MDc2ODgwMH0.placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos para o banco de dados
export interface Devocional {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  verse: string;
  verse_reference: string;
  content: string;
  prayer: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Produto {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url?: string;
  features: string[];
  created_at: string;
  updated_at: string;
}

export interface Pedido {
  id: string;
  produto_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  quantity: number;
  total_price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}