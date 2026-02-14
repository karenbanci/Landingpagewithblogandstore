# Blog Cristão - Configuração do Supabase

Este projeto está integrado com Supabase para gerenciamento de devocionais e produtos através de um painel administrativo.

## Como Configurar o Supabase

### 1. Criar Conta no Supabase

1. Acesse [https://supabase.com](https://supabase.com)
2. Crie uma conta gratuita
3. Crie um novo projeto

### 2. Criar as Tabelas

Execute os seguintes comandos SQL no SQL Editor do Supabase:

#### Tabela de Devocionais

```sql
CREATE TABLE devocionais (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  date DATE NOT NULL,
  verse TEXT NOT NULL,
  verse_reference TEXT NOT NULL,
  content TEXT NOT NULL,
  prayer TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE devocionais ENABLE ROW LEVEL SECURITY;

-- Política para leitura pública
CREATE POLICY "Leitura pública de devocionais" ON devocionais
  FOR SELECT USING (true);

-- Política para inserção autenticada
CREATE POLICY "Inserção autenticada de devocionais" ON devocionais
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Política para atualização autenticada
CREATE POLICY "Atualização autenticada de devocionais" ON devocionais
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Política para deleção autenticada
CREATE POLICY "Deleção autenticada de devocionais" ON devocionais
  FOR DELETE USING (auth.role() = 'authenticated');
```

#### Tabela de Produtos

```sql
CREATE TABLE produtos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image_url TEXT,
  features TEXT[] NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE produtos ENABLE ROW LEVEL SECURITY;

-- Política para leitura pública
CREATE POLICY "Leitura pública de produtos" ON produtos
  FOR SELECT USING (true);

-- Política para inserção autenticada
CREATE POLICY "Inserção autenticada de produtos" ON produtos
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Política para atualização autenticada
CREATE POLICY "Atualização autenticada de produtos" ON produtos
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Política para deleção autenticada
CREATE POLICY "Deleção autenticada de produtos" ON produtos
  FOR DELETE USING (auth.role() = 'authenticated');
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com suas credenciais do Supabase:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-key
```

Para obter essas credenciais:
1. Acesse seu projeto no Supabase
2. Vá em Settings → API
3. Copie a "Project URL" e a "anon public" key

### 4. Criar Usuário Administrador

1. Acesse Authentication → Users no painel do Supabase
2. Clique em "Add user" → "Create new user"
3. Defina email e senha para o administrador
4. Confirme o email (pode ser necessário desabilitar a confirmação de email nas configurações)

### 5. Acessar o Painel Administrativo

1. Acesse `/login` no seu site
2. Entre com as credenciais criadas
3. Gerencie devocionais e produtos através do painel `/admin`

## Funcionalidades

### Painel Administrativo (`/admin`)
- ✅ Criar, editar e deletar devocionais
- ✅ Criar, editar e deletar produtos
- ✅ Autenticação necessária para acessar

### Frontend Público
- ✅ Exibir devocionais do banco de dados (fallback para dados estáticos)
- ✅ Exibir produtos do banco de dados (fallback para dados estáticos)
- ✅ Funciona mesmo sem Supabase configurado (usa dados de exemplo)

## Notas Importantes

⚠️ **Este projeto não está configurado para coletar PII (informações pessoais identificáveis) ou dados sensíveis.**

⚠️ **Para um sistema de e-commerce real com processamento de pagamentos, você precisará:**
- Integrar um gateway de pagamento (Stripe, PayPal, etc.)
- Implementar um sistema de pedidos mais robusto
- Adicionar validações de segurança adicionais
- Configurar certificado SSL

## Desenvolvimento Local

Para testar localmente sem configurar o Supabase, o site continuará funcionando com dados de exemplo estáticos. Para habilitar o Supabase, basta configurar as variáveis de ambiente conforme explicado acima.
