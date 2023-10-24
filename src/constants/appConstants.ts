export const COLORS = {
    PRIMARY: '#1B97E4',
    WATER_BLUE: '#1780c2',
    SECONDARY: '#19467E',
    GRAY: '#d9d9d9',
    LIGHT_GRAY: '#F9F9F9',
    ACTIVE_SHADOW: '0 0 0 0.2rem rgba(58,211,205,.25)',
    TEXT_PLACEHOLDER: '#908080',
    WHITE: '#ffffff',
    PALE_GRAY: '#E6E8EB'
} as const

export const API_URL = 'https://react-api.restorationai.com/api'
export const NUM_MIN = 0
export const NUM_MAX = 999999
export const FONT_FAMILY = `Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`
export const FILE_MAX_SIZE = 4194304 //4MB

export const SHINGLES_TYPES = [
    { value: '', label: 'Select shingle type' },
    { value: 1, label: '3 Tab' },
    { value: 2, label: 'Laminated' }
]
export const VALLEYS_TYPES = [
    { value: '', label: 'Select valley type' },
    { value: 1, label: 'Open' },
    { value: 2, label: 'Close cut - half laced' },
    { value: 3, label: 'Woven - full laced' }
]
export const COMPLEXITY_TYPES = [
    { value: '', label: 'Select error' },
    { value: 1, label: '1%' },
    { value: 2, label: '2%' },
    { value: 3, label: '3%' },
    { value: 4, label: '4%' },
    { value: 5, label: '5%' }
]
export const ROOF_TYPES = [
    { value: '', label: 'Select roof type' },
    { value: 1, label: 'Hip' },
    { value: 2, label: 'Gable' }
]

export const REFERRAL_TYPES = [
    {
        value: 'google',
        label: 'Google'
    },
    {
        value: 'facebook',
        label: 'Facebook'
    },
    {
        value: 'ed_fako',
        label: 'Ed Fako'
    },
    {
        value: 'john_dye',
        label: 'John Dye'
    },
    {
        value: 'friend',
        label: 'Friend/Peer'
    },
    {
        value: 'website',
        label: 'Website'
    },
    {
        value: 'other',
        label: 'Other...'
    }
]
