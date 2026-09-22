export type ServiceCategory =
  | 'Básico'
  | 'Blindagem'
  | 'Cuidado dos Pés'
  | 'Técnicas e Alongamentos'
  | 'Manutenção/Adicionais'

export interface Service {
  id: number
  name: string
  description: string
  price: number
  category: ServiceCategory
}
