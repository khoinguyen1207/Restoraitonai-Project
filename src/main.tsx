import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { COLORS, FONT_FAMILY } from './constants/appConstants.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            colorBorder: COLORS.LIGHT_NAVY,
                            defaultColor: COLORS.LIGHT_NAVY,
                            textHoverBg: COLORS.WHITE,
                            defaultBg: COLORS.WHITE,
                            primaryShadow: COLORS.PRIMARY
                        },
                        Input: {
                            activeShadow: COLORS.ACTIVE_SHADOW,
                            fontSize: 14
                        }
                    },
                    token: {
                        fontFamily: FONT_FAMILY,
                        colorSplit: COLORS.GRAY,
                        colorPrimary: COLORS.PRIMARY,
                        colorBgContainer: COLORS.LIGHT_GRAY,
                        borderRadius: 4,
                        colorPrimaryHover: COLORS.PRIMARY_HOVER,
                        colorTextPlaceholder: COLORS.TEXT_PLACEHOLDER,
                        controlHeightLG: 44,
                        controlHeight: 38,
                        colorText: '#001633',
                        fontWeightStrong: 400,
                        lineHeight: 1.5
                    }
                }}
            >
                <App />
            </ConfigProvider>
        </BrowserRouter>
    </React.StrictMode>
)
