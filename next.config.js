/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: [
            "misc.scdn.co",
            "i.scdn.co",
            "geo-media.beatsource.com",
            "i1.sndcdn.com",
            "media.pitchfork.com",
            "seed-mix-image.spotifycdn.com",
            "tbvswgcbrilqlaxdsxii.supabase.co"
        ]
    },
    env: {
        NEXT_PUBLIC_SUPABASE_URL: "https://vgmtzakxbpwcyybilxdn.supabase.co",
        NEXT_PUBLIC_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnbXR6YWt4YnB3Y3l5YmlseGRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE4NTU5MzgsImV4cCI6MjAwNzQzMTkzOH0.X4MjKMMxNANM5KY0EO8BLNgNb-P8sdGqpK0y5vVfW2s",
        SUPABASE_SERVICE_ROLE_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnbXR6YWt4YnB3Y3l5YmlseGRuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MTg1NTkzOCwiZXhwIjoyMDA3NDMxOTM4fQ.9L-QHukBCSkPWErsB4gsz49NWe-ktDoJ-XyocMIYoFU",
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: "",
        STRIPE_SECRET_KEY: "",
        STRIPE_WEBHOOK_SECRET: ""
    }
};

module.exports = nextConfig;