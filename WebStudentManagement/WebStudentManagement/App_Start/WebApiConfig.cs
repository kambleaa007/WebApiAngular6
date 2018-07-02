using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;

using System.Net.Http.Headers;
using System.Web.Http;

namespace WebStudentManagement
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );


            var cors = new System.Web.Http.Cors.EnableCorsAttribute("http://localhost:51156", "*", "*");

            config.EnableCors(cors);

            // ADD JUST THIS LINE TO REGISTER FOLLOWING CLASS.
            config.Formatters.Add(new BrowserJsonFormatter());

        }
    }



    //-----------------------------------------------------------------------------------------------------------------------

    // TO SEE DATA IN JSON IN CHROME BROWSER ADD FOLLOWING CLASS BrowserJsonFormatter and REGISTER IN METHOD ADD NEW OBJECT OF THIS CLASS.
    public class BrowserJsonFormatter : System.Net.Http.Formatting.JsonMediaTypeFormatter
    {
        public BrowserJsonFormatter()
        {
            this.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));
            this.SerializerSettings.Formatting = Formatting.Indented;
        }

        public override void SetDefaultContentHeaders(Type type, HttpContentHeaders headers, MediaTypeHeaderValue mediaType)
        {
            base.SetDefaultContentHeaders(type, headers, mediaType);
            headers.ContentType = new MediaTypeHeaderValue("application/json");
        }
    }

    //-----------------------------------------------------------------------------------------------------------------------
}
