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
    name: string
    title: string
    company: string
    imageSrc: string
    background: string[]
    education: Education[]
    industries: Industry[]
    engagements: Engagement[]
  }
  
  