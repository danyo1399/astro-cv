export interface Data {
    id:string,
    profile: {
        name: { givenName: string, surname: string }, title: string,
    },
    companies: {filename: string}[],
    contact: { name: string, text: string }[]
    references: { name: string, role: string, phone: string, email: string }[],
    education: { year: string, qualification: string, institution: string }[],
    experience: Experience[],
    expertise: { area: string, items: string[] }[]
    introduction: string
}

export interface Experience {
    year: string, organisation: string, role: string,
    description: string,
    pageBreak: 'before' | 'after' | 'none'
}