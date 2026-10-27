# Side Shieldlock: no-login PAX version

1. **Back up your Supabase tables** `members` and `entries` first.
2. In Supabase SQL Editor, run `supabase-setup.sql`. It creates separate guest tables and RPC functions without deleting old records.
3. Inspect the SQL output. Both Last Man and Prom King MUST have a non-null `legacy_user_id`. If missing, match their UUIDs from `members` using the commented SQL instructions, or their old results will not appear. Panda should have no legacy ID.
4. In your GitHub Pages repository, upload `index.html`, `config.js`, `manifest.webmanifest`, `sw.js`, and three PNG icon files from this folder. Do NOT upload the SQL file to GitHub.
5. Reload the website and installed iPhone PWA. Choose a PAX and test saving a sample workout, switching PAX, and comparing results.

## Important limitations
- No authentication: anyone with the public website can choose any PAX, read shared results, create entries, and delete new guest entries. Do not use this design for sensitive data.
- Existing workout records remain in `entries`, are shown in results, but cannot be deleted from the no-login UI. New logs are written to `shieldlock_guest_entries`.
- If your original Supabase schema uses different table or column names, the SQL may need adaptation.
- You can later restore sign-in; existing legacy data remains intact.

## Exercise library update
The lift logger now includes a searchable library of 140+ exercises grouped by muscle group, plus custom exercise names. Selecting an alternative logs that exercise for this session only; the prescribed weekly template is unchanged. Existing Supabase RPC functions and tables are reused, so no SQL migration is required if the no-login guest version is already working. Week 4 onward, previous-week suggestions add 10 lb for standard weighted lifts and 5 lb per dumbbell for names containing “dumbbell”. Bodyweight exercise suggestions do not increase automatically. Always review suggestions before saving.
