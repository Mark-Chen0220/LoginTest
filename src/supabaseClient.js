import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ttmikfiisngmckyycwsz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bWlrZmlpc25nbWNreXljd3N6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNDY2MzYsImV4cCI6MjA2MzgyMjYzNn0.ejE4Bn6UCuSfJ9qc3KYDXGZyCqaqjVHe_1uV2aHCXUs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
