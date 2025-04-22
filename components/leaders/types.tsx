export interface Education {
    title: string
  }
  
  export interface Industry {
    name: string
  }
  
  export interface Engagement {
    title: string
    description: string
  }
  
  export interface Leader {
    pic:any
    name: string
    title: string
    company: string
    title2 ?: string
    company2 ?: string
    imageSrc: string
    background: string[]
    education: Education[]
    industries: Industry[]
    engagements: Engagement[]
  }
  
  