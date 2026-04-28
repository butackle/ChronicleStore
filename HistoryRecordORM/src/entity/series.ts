import {Entity, JoinTable, ManyToMany} from 'typeorm'
import {Group} from './abstract/group';
import {Scene} from './scene';

@Entity()
export class Series extends Group {
  @ManyToMany(() => Scene, scene => scene.series)
  @JoinTable()
  scenes!: Scene[]

  @ManyToMany(() => Series, series => series.series)
  @JoinTable()
  series!: Series[]
}
