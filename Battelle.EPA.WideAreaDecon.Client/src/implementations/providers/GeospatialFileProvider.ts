import IGeospatialFileProvider from '@/interfaces/providers/IGeospatialFileProvider';
import axios from 'axios';
import { injectable } from 'inversify';

@injectable()
export default class GeospatialFileProvider implements IGeospatialFileProvider {
  private readonly _url = '/api/GeospatialFile';

  getFileUrl(fileId: string): string {
    return `${this._url}/${fileId}`;
  }

  async uploadFileAsync(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return (await axios.post<string>(this._url, formData)).data;
  }
}
