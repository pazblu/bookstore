declare namespace NodeJS {
    interface Book {
        id: number
        title: string
        author: string
        printYear: number
        price: number
        genre: 'SCI_FI' | 'NOVEL' | 'HISTORY' | 'MANGA' | 'ROMANCE' | 'PROFESSIONAL'
    }

    interface response {
        result: string;
        error: string | undefined;
        

    }
}