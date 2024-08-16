import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://jurzsejgwsrrehdhzdkv.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getProjects() {
  let { data: projects, error } = await supabase.from('projects').select('*');

  if (error) {
    console.error(error);
    return;
  }
  projects.sort((a, b) => a.order - b.order);
  return projects;
}

export default supabase;
