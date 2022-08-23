export type ButtonId = 'Q' | 'W' | 'E' | 'A' | 'S' | 'D' | 'Z' | 'X' | 'C'

export type Kit = {
  id: string 
  title: string
  samples: {[id in ButtonId]: {
    id: ButtonId
    title: string
    value: string
  }}
}

export type Bank = {
  items: {[id: string]: Kit}
  ids: string[]
}