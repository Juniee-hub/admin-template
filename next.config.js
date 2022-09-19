/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withAntdLess = require('next-plugin-antd-less')

const nextConfig = {
    // 원하는 Next 설정 추가
}

module.exports = withAntdLess({
    lessVarsFilePath: './src/common/dark-theme.less',
    ...nextConfig,
    webpack (config) {
        return config
    }
})
