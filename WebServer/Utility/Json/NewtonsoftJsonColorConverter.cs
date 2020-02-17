using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace WebServer.Utility.Json
{
    public class NewtonsoftJsonColorConverter : JsonConverter
    {

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            if (!(value is Color castColor))
            {
                throw new ArgumentException("Color converter can only handle Color types!");
            }
            JToken
                .FromObject(ColorTranslator.ToHtml(castColor))
                .WriteTo(writer);
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue,
            JsonSerializer serializer) =>
            throw new NotImplementedException(
                "Unnecessary because CanRead is false. The type will skip the converter.");

        public override bool CanRead => false;

        public override bool CanConvert(Type objectType) => objectType == typeof(Color);
    }
}