#nullable enable
using System;
using System.Data.SqlTypes;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace Battelle.EPA.WideAreaDecon.API.Utility.Extensions
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
            return (T)Enum.Parse(typeof(T), value, true);
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