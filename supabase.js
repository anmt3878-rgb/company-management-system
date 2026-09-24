// ==========================================
// CompanyFlow - Supabase Connection
// ==========================================

const SUPABASE_URL =
  "https://wkmahofoshskgxejdvko.supabase.co";

const SUPABASE_ANON_KEY =
  " Publishable Key sb_publishable_GD3xoZfqMMUg46TTmzRGiQ_Uk-zQuzd
";

const supabaseClient =
  supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );
