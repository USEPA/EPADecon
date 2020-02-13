using ElectronNET.API;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.SpaServices;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using VueCliMiddleware;

namespace WebServer
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();

            // Add AddRazorPages if the app uses Razor Pages.
            services.AddRazorPages();


            // In production, the Vue files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
            }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
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


        private void ConfigureEndpoints(IEndpointRouteBuilder endpoints)
        {
            endpoints.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action=Index}/{id?}");
#if DEBUG
            var vueSettings = Configuration.GetSection("VueCliSettings");
            endpoints.MapToVueCliProxy(
                "{*path}",
                new SpaOptions { SourcePath = "ClientApp" },
                npmScript: "serve",
                regex: "App running at",
                port: vueSettings.GetValue<int>("Port"));
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
