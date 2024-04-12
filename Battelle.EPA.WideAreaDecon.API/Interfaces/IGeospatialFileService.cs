using Microsoft.AspNetCore.Http;
using System;
using System.Threading.Tasks;

namespace Battelle.EPA.WideAreaDecon.API.Interfaces
{
    public interface IGeospatialFileService
    {
        Task<Guid> SaveFileAsync(IFormFile file);
        Task<(byte[], string)> DownloadFileAsync(Guid id);
    }
}
