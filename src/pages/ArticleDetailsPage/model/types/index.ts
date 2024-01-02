import { ArticlesDetailsCommentsSchema } from './ArticlesDetailsCommentsSchema';
import { ArticlesDetailsRecommendationsSchema } from './ArticlesDetailsRecommendationsSchema';

export interface ArticleDetailsPageSchema {
  comments: ArticlesDetailsCommentsSchema;
  recommendations: ArticlesDetailsRecommendationsSchema;
}
