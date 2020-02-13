using System;
using System.IO;
using System.Threading.Tasks;
using ElectronNET.API;
using ElectronNET.API.Entities;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace WebServer
{
    public class ElectronConfiguration
    {
        public BrowserWindowOptions WindowOptions { get; set; }

        public ElectronConfiguration()
        {
            WindowOptions = new BrowserWindowOptions()
            {
                Title = "Wide Area Decontamination Tool",
                AutoHideMenuBar = true,
                Width = 1920,
                Height = 1080
            };
        }

        public void Configure(
            IApplicationBuilder app,
            IWebHostEnvironment env,
            IHostApplicationLifetime lifetime)
        {
            StartWindow(lifetime);
        }

        private void StartWindow(
            IHostApplicationLifetime lifetime)
        {

            // Open the Electron-Window here
            Task.Run(async () =>
            {
                var browserWindow = await Electron.WindowManager.CreateWindowAsync(WindowOptions ?? new BrowserWindowOptions());
                browserWindow.Maximize();
                Electron.GlobalShortcut.Register("CommandOrControl+Shift+I",
                    () => { browserWindow.WebContents.OpenDevTools(); });
                browserWindow.OnClose += lifetime.StopApplication;
            });
        }
    }
}