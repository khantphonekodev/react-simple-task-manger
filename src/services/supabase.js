import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://olmldrebcpwrlnhrgcia.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sbWxkcmViY3B3cmxuaHJnY2lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4OTA0MDEsImV4cCI6MjAwODQ2NjQwMX0.UYhLdGC4qUFm_X44W-Y7csd6XtiGMZ7ZlTtfvip5c5A";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
