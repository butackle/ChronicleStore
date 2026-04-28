import 'reflect-metadata'
import {AppDataSource} from '../data-source';


function mapType(type: any): string {
  if (typeof type === 'function') {
    switch (type.name) {
      case 'String':
        return 'string'
      case 'Number':
        return 'int'
      case 'Boolean':
        return 'boolean'
      case 'Date':
        return 'datetime'
      default:
        return 'string'
    }
  }
  if (typeof type === 'string') {
    return type
  }
  return 'string'
}

async function generateER() {
  await AppDataSource.initialize()

  const entities = AppDataSource.entityMetadatas

  let output = 'erDiagram\n\n'

  // ■ エンティティ（テーブル）
  for (const entity of entities) {
    output += `  ${entity.name.toUpperCase()} {\n`

    for (const column of entity.columns) {
      const type = mapType(column.type)
      const pk = column.isPrimary ? ' PK' : ''
      const nullable = column.isNullable ? ' NULL' : ''

      output += `    ${type} ${column.propertyName}${pk}${nullable}\n`
    }

    output += `  }\n\n`
  }

  // ■ リレーション
  for (const entity of entities) {
    for (const rel of entity.relations) {
      const from = entity.name.toUpperCase()
      const to = rel.inverseEntityMetadata.name.toUpperCase()

      let relationSymbol = ''

      if (rel.isOneToOne) relationSymbol = '||--||'
      else if (rel.isOneToMany) relationSymbol = '||--o{'
      else if (rel.isManyToOne) relationSymbol = '}o--||'
      else if (rel.isManyToMany) relationSymbol = '}o--o{'

      output += `  ${from} ${relationSymbol} ${to} : ${rel.propertyName}\n`
    }
  }

  console.log(output)

  await AppDataSource.destroy()
}

generateER().catch(console.error)