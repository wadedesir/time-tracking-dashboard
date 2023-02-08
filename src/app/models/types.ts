export type TimeScale = 'daily' | 'weekly' | 'monthly';
export interface TimeData {
    title: string,
    timeframes: TimeFrames
}

export interface TimeFrames {
    daily: TimeOption,
    monthly: TimeOption,
    weekly: TimeOption
}

interface TimeOption {
    current: number,
    previous: number
}

