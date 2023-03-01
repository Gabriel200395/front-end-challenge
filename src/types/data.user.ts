export interface DataCartUser {
  name: string;
  imageUrl: string[];
  firstAnnuity: {
    textFormatted: string;
  };
  valueOfMinimalIncomeRequired: number;
  rating: {
    total_reviews: string;
    average_score: string;
  };
}
