namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results
{
    public class EventResults
    {
        public OtherResults OtherResults { get; set; }
        public IncidentCommandResults IncidentCommandResults { get; set; }
        public double TotalEventCost { get; set; }
        public double TotalEventDuration { get; set; }
        public double TotalContaminationArea { get; set; }
        public double TotalSolidWasteProduced { get; set; }
        public double TotalAqueousWasteProduced { get; set; }
    }
}
