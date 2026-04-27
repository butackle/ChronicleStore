import {z} from 'zod';

/**
 * Reliability Score is a number between 0 and 100 that represents the reliability of a history record.
 * The higher the score, the more reliable the history record is.
 */

enum ReliabilityScore {
  min = 0,
  max = 100
}

const reliabilityScoreSchema = z.number().min(ReliabilityScore.min).max(ReliabilityScore.max);

type ReliabilityScoreType = z.infer<typeof reliabilityScoreSchema>;

export {
  ReliabilityScore,
  reliabilityScoreSchema,
  ReliabilityScoreType
}