import { withSentryConfig } from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        // dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
            },
        ],
    },

    webpack(config: { module: { rules: { test: RegExp; use: ({ loader: string; options: { svgoConfig: { plugins: never[]; }; isDev?: undefined; compilerType?: undefined; basePath?: undefined; assetPrefix?: undefined; }; } | { loader: string; options: { isDev: any; compilerType: string; basePath: string; assetPrefix: string; svgoConfig?: undefined; }; })[]; }[]; }; }, context: { dev: any; }) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgoConfig: {
                            plugins: [],
                        },
                    },
                },
                {
                    loader: 'next-image-loader',
                    options: {
                        isDev: context.dev,
                        compilerType: 'client',
                        basePath: '',
                        assetPrefix: '',
                    },
                },
            ],
        });

        return config;
    },
    trailingSlash: true,
    serverExternalPackages: ['ssh2', 'ssh2-sftp-client'],
    redirects() {
        return [];
    },
};

export default withSentryConfig(nextConfig, {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // org: 'clorox-0o',
    // project: 'glad',

    // // Only print logs for uploading source maps in CI
    // silent: !process.env.CI,

    // // For all available options, see:
    // // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // // Upload a larger set of source maps for prettier stack traces (increases build time)
    // widenClientFileUpload: true,

    // // Automatically annotate React components to show their full name in breadcrumbs and session replay
    // reactComponentAnnotation: {
    //     enabled: false,
    // },

    // // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // // This can increase your server load as well as your hosting bill.
    // // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // // side errors will fail.
    // // tunnelRoute: "/monitoring",

    // // Hides source maps from generated client bundles


    // // Automatically tree-shake Sentry logger statements to reduce bundle size
    // disableLogger: true,

    // // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // // See the following for more information:
    // // https://docs.sentry.io/product/crons/
    // // https://vercel.com/docs/cron-jobs
    // automaticVercelMonitors: true,
});