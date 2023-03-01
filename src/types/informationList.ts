export interface DataCart {
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


export interface PropsInformationList {
   data: DataCart | undefined;
}
  