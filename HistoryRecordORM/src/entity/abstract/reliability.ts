import {Check, Column, Entity} from 'typeorm'
import {ReliabilityScore, ReliabilityScoreType} from '../../type/reliability';


@Entity()
@Check(`"reliability" >= ${ReliabilityScore.min} AND "reliability" <= ${ReliabilityScore.max}`)
export abstract class Reliability {
  @Column({
    type: 'float'
  })
  reliability: ReliabilityScoreType
}