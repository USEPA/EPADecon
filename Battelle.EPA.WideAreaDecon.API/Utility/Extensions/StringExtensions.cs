using System;

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
        public static T ParseEnum<T>(this string value)
        {
            return (T)Enum.Parse(typeof(T), value, true);
        }

        public static double? ConvertToDouble(this string value)
        {
            if (string.IsNullOrWhiteSpace(value))
                return null;
            return double.Parse(value);
        }
    }
}