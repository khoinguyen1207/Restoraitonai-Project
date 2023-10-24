import { createPortal } from 'react-dom'

interface Props {
    isVisible: boolean
}

export default function Loading({ isVisible = true }: Props) {
    return createPortal(
        <div
            style={{ visibility: isVisible ? 'visible' : 'hidden' }}
            className='fixed bottom-0 left-0 right-0 top-0 z-10 flex h-screen w-screen bg-black bg-opacity-50'
        >
            <img
                src='https://dev.restorationai.com/static/media/loading.ed2858d1.svg'
                className='w-52 h-52 absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]'
                alt='Loading spin'
            />
        </div>,
        document.getElementById('root') as HTMLElement
    )
}
