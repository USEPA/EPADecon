using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Domain
{
    public class Team
    {
        public ElementCategory WorkType { get; set; }
        public Assignment CurrentAssignment { get; set; } = null;
    }
}
