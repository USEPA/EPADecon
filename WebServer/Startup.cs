using System;
using System.IO;
using System.Linq;
using ElectronNET.API;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.SpaServices;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using VueCliMiddleware;
using WebServer.Controllers;
using WebServer.Interfaces;
using WebServer.Models.ClientConfiguration;
using WebServer.Services;

namespace WebServer
{
    /// <summary>
    /// The webserver startup options class
    /// </summary>
    public class Startup
    {
        /// <summary>
        /// Constructor which requires a non-null configuration
        /// </summary>
        /// <param name="configuration"></param>
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration ??
                throw new ArgumentNullException(nameof(configuration));
        }

        private IConfiguration Configuration { get; }

        /// <summary>
        /// Called during web host startup to configure the services
        /// </summary>
        /// <param name="services"></param>
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews()
                .AddNewtonsoftJson();

            services.AddRazorPages();

            // In production, the Vue files will be served from this directory
            services.AddSpaStaticFiles(configuration => { configuration.RootPath = "ClientApp/dist"; });

            // Register the Swagger generator, defining one or more Swagger documents
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc(
                    "v1",
                    new OpenApiInfo
                    {
                        Title = "Wide ARea Decon Rest API",
                        Version = "v1"
                    });

                c.DocInclusionPredicate((docName, apiDesc) =>
                {
                    if (apiDesc.HttpMethod == null) return false;
                    return true;
                });

                //Set the comments path for the swagger json and ui.
                c.IncludeXmlComments(
                    Path
                        .Combine(
                            AppContext.BaseDirectory,
                            "WebServer.xml"));
            });

            ConfigureModels(services);

            ConfigureProviders(services);
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </summary>
        /// <param name="app"></param>
        /// <param name="env"></param>
        /// <param name="lifetime"></param>
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IHostApplicationLifetime lifetime)
        {
            if (env.IsDevelopment() || HybridSupport.IsElectronActive)
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
                app.UseHttpsRedirection();
            }

            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS etc.), specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c => { c.SwaggerEndpoint("/swagger/v1/swagger.json", "Wide Area Decon API V1"); });

            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            ConfigureElectron(
                app, env, lifetime);

            app.UseRouting()
                .UseEndpoints(ConfigureEndpoints);

#if !DEBUG
            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";
            });
#endif
        }


        private void ConfigureModels(IServiceCollection services)
        {
            services.AddTransient(s =>
                Configuration.GetSection("ClientConfiguration")
                    .Get<ClientConfiguration>());
        }

        private void ConfigureProviders(IServiceCollection services)
        {
            services.AddTransient<
                IClientConfigurationService,
                ClientConfigurationService>();
        }

        private void ConfigureEndpoints(IEndpointRouteBuilder endpoints)
        {
            endpoints.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action=Index}/{id?}");
#if DEBUG
            endpoints.MapToVueCliProxy(
                "{*path}",
                new SpaOptions {SourcePath = "ClientApp"},
                npmScript: "serve",
                regex: "App running at",
                port: Configuration.GetValue<int>("Port") + 1);
#endif
        }

        private void ConfigureElectron(
            IApplicationBuilder app,
            IWebHostEnvironment env,
            IHostApplicationLifetime lifetime)
        {
            if (HybridSupport.IsElectronActive)
                Configuration.GetSection("ElectronSettings")?
                    .Get<ElectronConfiguration>()?
                    .Configure(app, env, lifetime);
        }
    }
}