export default interface IGeospatialFileProvider {
  getFileUrl(fileId: string): string;
  uploadFileAsync(file: File): Promise<string>;
}
