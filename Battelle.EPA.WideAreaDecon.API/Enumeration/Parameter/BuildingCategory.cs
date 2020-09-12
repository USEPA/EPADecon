#pragma warning disable 1591
namespace Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter
{
    /// <summary>
    /// Categories of buildings utilized in the models
    ///
    /// Matches the categories defined by the FEMA HAZUS program
    /// </summary>
    public enum BuildingCategory
    {
        Residential,
        Commercial,
        Industrial,
        Agricultural,
        Religious,
        Government,
        Educational
    }
}