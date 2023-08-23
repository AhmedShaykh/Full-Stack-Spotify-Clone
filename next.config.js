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
            "zucjfjhicbzijvftmkdn.supabase.co"
        ]
    },
    env: {
        NEXT_PUBLIC_SUPABASE_URL: "https://zucjfjhicbzijvftmkdn.supabase.co",
        NEXT_PUBLIC_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1Y2pmamhpY2J6aWp2ZnRta2RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIwOTg1MDUsImV4cCI6MjAwNzY3NDUwNX0.7XFQEf6O2O-IM0sJSSIVXrAkqyoIorEZXHjzPmVYJ98",
        SUPABASE_SERVICE_ROLE_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1Y2pmamhpY2J6aWp2ZnRta2RuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjA5ODUwNSwiZXhwIjoyMDA3Njc0NTA1fQ.1Vjn7aaHyxpnemDzFOZPfe-OesihfpCd36shIUtQf54",
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: "pk_test_51NNHSbBYP40wltzrkBMgLOG9GopQydddak2xfq17EWIrQWEPsURw1gww5v30YuexAWDVTkti7mfmwNdqPT3I1A3j00gwOZUYAo",
        STRIPE_SECRET_KEY: "sk_test_51NNHSbBYP40wltzrSISoxpjoDYlPQdI0S61jymo5gtk0bCyZQxhTANSmquJXvTVYG8Gx0GjjMcr57Ih63IYuVjzC006da7Zlq1",
        STRIPE_WEBHOOK_SECRET: ""
    }
};

module.exports = nextConfig;