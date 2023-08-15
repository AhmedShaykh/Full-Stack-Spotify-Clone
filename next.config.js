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
        NEXT_PUBLIC_SUPABASE_URL: "",
        NEXT_PUBLIC_SUPABASE_ANON_KEY: "",
        SUPABASE_SERVICE_ROLE_KEY: "",
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: "",
        STRIPE_SECRET_KEY: "",
        STRIPE_WEBHOOK_SECRET: ""
    }
};

module.exports = nextConfig;