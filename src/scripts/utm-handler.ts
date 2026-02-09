/**
 * UTM Handler
 * Captures UTM parameters from URL and stores them in sessionStorage.
 * Provides a function to retrieve stored UTMs.
 */

export interface UTMParams {
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_term: string;
    utm_content: string;
}

const UTM_KEYS = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
];

export function initUTMTracking() {
    if (typeof window === "undefined") return;

    const urlParams = new URLSearchParams(window.location.search);
    let hasUTM = false;

    UTM_KEYS.forEach((key) => {
        const value = urlParams.get(key);
        if (value) {
            sessionStorage.setItem(key, value);
            hasUTM = true;
        }
    });

    // Optional: Clean URL if desired (not implemented to avoid navigation issues)
    // if (hasUTM) { ... }
}

export function getUTMParams(): Partial<UTMParams> {
    if (typeof window === "undefined") return {};

    const params: Partial<UTMParams> = {};
    UTM_KEYS.forEach((key) => {
        const value = sessionStorage.getItem(key);
        if (value) {
            params[key as keyof UTMParams] = value;
        }
    });
    return params;
}

// Auto-initialize on import if in browser
if (typeof window !== "undefined") {
    initUTMTracking();
    // Also run on view transitions if using Astro View Transitions (optional but good practice)
    document.addEventListener('astro:page-load', initUTMTracking);
}
