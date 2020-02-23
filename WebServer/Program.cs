using System;
using System.Drawing;
using System.Net;
using System.Security.Authentication;
using System.Security.Cryptography.X509Certificates;
using ElectronNET.API;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.AspNetCore.Server.Kestrel.Https;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using WebServer.Application;

namespace WebServer
{
    /// <summary>
    /// Entry point class for the application
    /// </summary>
    public static class Program
    {
        /// <summary>
        /// The entry point application, starts the program
        /// </summary>
        /// <param name="args">The argument list - utilized in electron settings</param>
        public static void Main(string[] args) => WebHost
                .CreateDefaultBuilder(args)
                .ConfigureAppConfiguration(ConfigureIfElectron)
                .ConfigureKestrel(ConfigureConfigureKestrelSettings)
                .UseElectron(args)
                .UseStartup<Startup>()
                .Build()
                .Run();

        private static void ConfigureConfigureKestrelSettings(WebHostBuilderContext ctx, KestrelServerOptions serverOptions)
        {
            var port = HybridSupport.IsElectronActive
                ? Convert.ToInt32(BridgeSettings.WebPort)
                : ctx.Configuration.GetValue<int>("Port");

            serverOptions.ListenLocalhost(port);
        }


        private static void ConfigureIfElectron(WebHostBuilderContext context, IConfigurationBuilder builder)
        {
            if (!HybridSupport.IsElectronActive)
                return;

            context.HostingEnvironment.EnvironmentName = "Electron";
            builder.AddJsonFile($"appsettings.Electron.json", true);
            Environment.SetEnvironmentVariable("ASPNETCORE_ENVIRONMENT", "Electron", EnvironmentVariableTarget.Process);
        }
    }
}
