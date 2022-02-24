import CityLinkLists from '@/implementations/City/CityLinkLists';

export default interface ICityDataAPI {
  getCityLinks(): Promise<CityLinkLists>;
}
