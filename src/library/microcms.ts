//SDK利用準備
import { createClient, MicroCMSQueries } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type Feature = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  constraint: {
    fieldId: string;
    ['note-type']: string[];
    ['note-title']: string;
    ['note-item']: {
      fieldId: string;
      ['generic-list-item']: string;
    }[],
    ['note-images']: string[]
  }[];
  ['input-fields']: {
    fieldId:string;
    ['input-field-title']: string;
    ['input-field-required']: boolean;
    ['input-field-default']: string;
    ['input-field-desc']: string;
  }[];
  others: {
    fieldId: string;
    ['definition-title']: string;
    ['definition-value']: string;
    ['definition-images']: {
      url: string;
      height: number;
      width: number;
    }[];
  }[]
};
export type FeaturesResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Feature[];
};

export const getFeatures = async (queries?: MicroCMSQueries) => {
  return await client.get<FeaturesResponse>({ endpoint: "features", queries });
};
export const getFeatureDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Feature>({
    endpoint: "features",
    contentId,
    queries,
  });
};