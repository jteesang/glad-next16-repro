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

    webpack(config, context) {
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
