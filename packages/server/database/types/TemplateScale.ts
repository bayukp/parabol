import shortid from 'shortid'
import TemplateScaleValue from './TemplateScaleValue'

export interface TemplateScaleInput {
  id?: string
  name: string
  values: TemplateScaleValue[]
  teamId: string
  unit?: string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

export default class TemplateScale {
  id: string
  name: string
  values: TemplateScaleValue[]
  teamId: string
  unit?: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date

  constructor(input: TemplateScaleInput) {
    const {id, name, values, teamId, createdAt, updatedAt, deletedAt, unit} = input
    const now = new Date()
    this.id = id || shortid.generate()
    this.createdAt = createdAt || now
    this.updatedAt = updatedAt || now
    this.deletedAt = deletedAt ?? undefined
    this.name = name
    this.values = values
    this.teamId = teamId
    this.unit = unit ?? undefined
  }
}
