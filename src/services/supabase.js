import { createClient } from "@supabase/supabase-js";

export const supabaseUrl =
	"https://piktrvofuiqfazundhdg.supabase.co"

const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpa3Rydm9mdWlxZmF6dW5kaGRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5OTk3MzUsImV4cCI6MjAzMjU3NTczNX0.m35Ce18KySo1auYm_3loO7dXEdGocMjuIaMEM91dR-M";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
 