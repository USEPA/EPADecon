#nullable enable
using System;
using System.Data.SqlTypes;
using System.Linq;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Extensions
{
    public static class StringExtensions
    {
        /// <summary>
        /// Generalized way to parse an enum from a string value
        /// Throws if not found
        /// </summary>
        /// <typeparam name="T">The enum type to parse to</typeparam>
        /// <param name="value">The value to parse from</param>
        /// <returns>An enum type that matches the string</returns>
        public static T ParseEnum<T>(this string value) where T : Enum
        {
            var enumType = typeof(T);
            foreach (var name in Enum.GetNames(enumType))
            {
                var field = enumType.GetField(name);
                if (field == null) continue;
                var enumMemberAttribute =
                    ((EnumMemberAttribute[]) field.GetCustomAttributes(typeof(EnumMemberAttribute), true))
                    .SingleOrDefault();
                if (enumMemberAttribute?.Value == value) return (T) Enum.Parse(enumType, name);
            }

            return (T) Enum.Parse(typeof(T), value, true);
        }

        public static T? ParseOptionalEnum<T>(this string value) where T : struct, Enum
        {
            if (string.IsNullOrWhiteSpace(value))
            {
                return null;
            }

            return value.ParseEnum<T>();
        }

        public static double? ConvertToOptionalDouble(this string value)
        {
            if (string.IsNullOrWhiteSpace(value))
                return null;
            return double.Parse(value);
        }

        public static double? ConvertToStepRoundedAndOptionalDouble(this string value, ParameterMetaData metaData)
        {
            double? valueAsDouble = ConvertToOptionalDouble(value);
            if (!valueAsDouble.HasValue)
            {
                return null;
            }

            // inspired by Vuetify's slider calculations
            // https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VSlider/VSlider.ts
            var stepAsString = metaData.Step.ToString();
            var decimals = stepAsString.Contains(".")
                ? (stepAsString.Length - stepAsString.IndexOf('.') - 1)
                : 0;

            var offset = metaData.LowerLimit % metaData.Step;

            var newValue = Math.Round((valueAsDouble.Value - offset) / metaData.Step) * metaData.Step + offset;

            return Math.Round(Math.Min(newValue, metaData.UpperLimit), decimals);
        }

        public static double ConvertToDouble(this string value)
        {
            if (string.IsNullOrWhiteSpace(value))
            {
                throw new ApplicationException("Cannot convert null or whitespace value to double");
            }

            return double.Parse(value);
        }
    }
}