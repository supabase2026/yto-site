
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://brlrczzhcgfrpzgxjetg.supabase.co";

const supabaseKey = "sb_publishable_1fWbAhxS4wp4Qn1K78HnRA_CB_PjAni";

export const supabase = createClient(supabaseUrl, supabaseKey);
