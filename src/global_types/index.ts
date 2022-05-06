export interface ResponseData<T> {
    page: number
    total_pages: number
    total_results: number
    results: T
}

export interface QueryOptions {
    retry?: boolean
    cacheTime?: number
    staleTime?: number
    enabled?: boolean
    refetchInterval?: number | false
    refetchOnMount?: boolean | 'always'
    refetchOnWindowFocus?: boolean | 'always'
}

export interface CheckButtonType {
    label: string
    checked: boolean
}

export interface EventDataType {
    cardType: string
    image?: string | undefined
    date: string
    title: string
    titleIcon?: string
    catagory: string
    duration: string
    type: string
    teamMatesAvatar?: string
    attending: boolean
}