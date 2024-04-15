export default interface IHomeOptionAction {
  initialActionAsync: (() => Promise<void>) | undefined;

  isModal(): boolean;

  getNext(): string;
}
