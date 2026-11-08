import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ebvpavkenmohszxiaoxi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVidnBhdmtlbm1vaHN6eGlhb3hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5NzE0OTcsImV4cCI6MjA5MjU0NzQ5N30.6LfR8g0dr9kzYdCmqtI7COsgHSkbwVi1e2ua6Nh6IUw';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
