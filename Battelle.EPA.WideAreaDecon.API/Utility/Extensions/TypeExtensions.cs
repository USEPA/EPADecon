using System;
using Battelle.EPA.WideAreaDecon.API.Utility.Attributes;
using NPOI.SS.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Utility.Extensions
{
    public static class TypeExtensions
    {
        public static ICell GetCell(this Type type, string propertyName, IRow row)
        {
            return ExcelPropertyAttribute.GetCell(type, propertyName, row);
        }

        public static string GetCellValue(this Type type, string propertyName, IRow row)
        {
            return ExcelPropertyAttribute.GetCellValue(type, propertyName, row);
        }
    }
}