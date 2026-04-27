import {z} from 'zod';
import {reliabilityScoreSchema} from './reliability';

const CoordinatesSchema = z.object({
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  reliability: reliabilityScoreSchema,
})

type Coordinates = z.infer<typeof CoordinatesSchema>

export {Coordinates}