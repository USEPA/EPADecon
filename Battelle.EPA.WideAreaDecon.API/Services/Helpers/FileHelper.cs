using Microsoft.AspNetCore.Http;
using System;
using System.IO;
using System.Threading.Tasks;

namespace Battelle.EPA.WideAreaDecon.API.Services.Helpers
{
    public static class FileHelper
    {
        public static async Task<bool> SaveFileAsync(IFormFile file, string destinationPath)
        {
            Directory.CreateDirectory(Path.GetDirectoryName(destinationPath));

            if (file.Length > 0)
            {
                using var stream = File.Create(destinationPath);
                await file.CopyToAsync(stream);

                return true;
            }

            return false;
        }

        public static async Task<byte[]> DownloadFileAsync(string filePath)
        {
            if (!Path.IsPathFullyQualified(filePath))
            {
                throw new ArgumentException("Only fully qualified file paths are supported");
            }

            return await File.ReadAllBytesAsync(filePath);
        }

        public static void DeleteFile(string filePath)
        {
            if (File.Exists(filePath))
            {
                File.Delete(filePath);
            }
        }
    }
}
