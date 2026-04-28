import {Check, Column, Entity} from 'typeorm'
import {ReliabilityScore} from '../../type/reliability';
import {Base} from './_base';


// Reliability is an abstract class that represents the reliability of a source or a record.
// It has a single property, reliability,
// which is a float value between 0 and 1. The reliability score is used to determine the trustworthiness of a source or a record.
// The Check decorator is used to ensure that the reliability score is within the valid range.
@Entity()
@Check(`"reliability" >= ${ReliabilityScore.min} AND "reliability" <= ${ReliabilityScore.max}`)
export abstract class Reliability extends Base {
  @Column({
    type: 'float'
  })
  reliability!: number
}