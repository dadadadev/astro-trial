import { LANGS } from "./consts";

export const getLangParams = () => {
  const langParams = LANGS.map(lang => ({
    params: { lang }
  }));
  return langParams;
}
  