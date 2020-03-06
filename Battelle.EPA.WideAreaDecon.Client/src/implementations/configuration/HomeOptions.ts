import IHomeOptions from '@/interfaces/configuration/IHomeOptions';

export default class HomeOptions implements IHomeOptions {
  title: string;

  image: string;

  helpMessage: string;

  constructor(title: string, image: string, helpMessage: string) {
    this.title = title;
    this.image = image;
    this.helpMessage = helpMessage;
  }
}