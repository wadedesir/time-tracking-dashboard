export type TimeScale = 'daily' | 'weekly' | 'monthly';
export interface TimeData {
    title: string,
    timeframes: TimeFrames
}

export interface TimeFrames {
    daily: TimeOption,
    weekly: TimeOption
    monthly: TimeOption,
}

interface TimeOption {
    current: number,
    previous: number
}

export interface PastDate {
    daily: string,
    weekly: string,
    monthly: string
}

