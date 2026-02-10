import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    const response = await next();

    const headers = response.headers;

    // Security Headers
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("X-Frame-Options", "DENY");
    headers.set("X-XSS-Protection", "1; mode=block");
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    headers.set(
        "Strict-Transport-Security",
        "max-age=31536000; includeSubDomains; preload",
    );
    headers.set(
        "Permissions-Policy",
        "geolocation=(), microphone=(), camera=(), payment=()",
    );

    // Content Security Policy
    // Note: 'unsafe-inline' and 'unsafe-eval' for scripts are often needed for Astro hydration and some third-party tools.
    // Adjust as needed for stricter security.
    const csp = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "img-src 'self' data: https://*.googleusercontent.com",
        "font-src 'self' https://fonts.gstatic.com",
        "frame-src 'self' https://www.google.com",
        "connect-src 'self'",
    ];

    headers.set("Content-Security-Policy", csp.join("; "));

    return response;
});
