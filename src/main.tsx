import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { COLORS, FONT_FAMILY } from './constants/appConstants.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import AppProvider from './contexts/app.context.tsx'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 0
        }
    }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <AppProvider>
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorBorder: COLORS.SECONDARY,
                                    defaultColor: COLORS.SECONDARY,
                                    defaultBg: COLORS.WHITE,
                                    primaryShadow: COLORS.PRIMARY
                                },
                                Input: {
                                    activeShadow: COLORS.ACTIVE_SHADOW,
                                    fontSize: 14
                                },
                                Select: {
                                    fontSize: 16
                                },
                                Form: {
                                    labelFontSize: 16
                                },
                                Menu: {
                                    itemSelectedBg: COLORS.PRIMARY,
                                    itemSelectedColor: COLORS.WHITE,
                                    itemHoverColor: COLORS.SECONDARY,
                                    itemHoverBg: COLORS.PALE_GRAY,
                                    itemMarginInline: 0
                                },
                                Layout: {
                                    siderBg: COLORS.PALE_GRAY
                                }
                            },
                            token: {
                                colorPrimary: COLORS.PRIMARY,
                                colorPrimaryHover: COLORS.WATER_BLUE,
                                colorBgContainer: COLORS.LIGHT_GRAY,
                                colorSplit: COLORS.GRAY,
                                borderRadius: 4,
                                colorTextPlaceholder: COLORS.TEXT_PLACEHOLDER,
                                controlHeightLG: 44,
                                controlHeight: 38,
                                colorText: '#001633',
                                fontWeightStrong: 400,
                                lineHeight: 1.5,
                                fontFamily: FONT_FAMILY
                            }
                        }}
                    >
                        <App />
                    </ConfigProvider>
                </AppProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
)
