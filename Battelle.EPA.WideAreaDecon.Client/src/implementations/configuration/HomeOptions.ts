import IHomeOptions from '@/interfaces/configuration/IHomeOptions';

export default class HomeOptions implements IHomeOptions {
  title: string;

  image: string;

  helpMessage: string;

  helpActive: boolean;
  
  linkPage: string;

  constructor(title: string, image: string, helpMessage: string, linkPage: string) {
    this.title = title;
    this.image = image;
    this.helpMessage = helpMessage;
    this.helpActive = false;
    this.linkPage = linkPage;
  }
}
