declare namespace NodeJS {
    type Genre = 'SCI_FI' | 'NOVEL' | 'HISTORY' | 'MANGA' | 'ROMANCE' | 'PROFESSIONAL'
    interface Book {
        id: number
        title: string
        author: string
        printYear: number
        price: number
        genre: Genre[]
    }

    interface response {
        result: string;
        error: string | undefined;
        

    }
}