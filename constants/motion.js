export const TRANSITIONS = {
    default: { type: 'spring', damping: 10, stiffness: 50, duration: 0.4 },
}

export const PRESETS = {
    page: {
        initial: {
            scale: 0.95,
            y: -50,
            opacity: 0,
        },
        animate: {
            scale: 1,
            y: 0,
            opacity: 1,
        },
        exit: {
            scale: 0.95,
            y: 25,
            opacity: 0,
        },
        transition: {
            default: {
                duration: 0.25,
            },
        },
    },
}

export const GESTURES = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.9 },
}
