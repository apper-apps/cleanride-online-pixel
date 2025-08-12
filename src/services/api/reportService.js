import reportData from "@/services/mockData/reports.json";
import trainData from "@/services/mockData/trains.json";

let reports = [...reportData];
let trains = [...trainData];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const reportService = {
  async submitReport(reportData) {
    await delay(300);
    
    try {
      const newReport = {
        Id: Math.max(...reports.map(r => r.Id), 0) + 1,
        ...reportData,
        timestamp: new Date().toISOString(),
        status: "submitted"
      };
      
      reports.push(newReport);
      return { ...newReport };
    } catch (error) {
      throw new Error("Fehler beim Senden der Meldung");
    }
  },

  async getTrainInfo(trainId, wagonId) {
    await delay(200);
    
    try {
      const train = trains.find(t => t.Id === trainId);
      if (!train) {
        throw new Error("Zug nicht gefunden");
      }
      
      const wagon = train.wagons.find(w => w === wagonId);
      if (!wagon) {
        throw new Error("Wagen nicht gefunden");
      }
      
      return {
        trainId: train.Id,
        line: train.line,
        wagonId: wagon,
        currentLocation: train.currentLocation,
        nextStop: train.nextStop
      };
    } catch (error) {
      throw new Error("Fahrzeuginformationen konnten nicht geladen werden");
    }
  },

  async uploadPhoto(file) {
    await delay(400);
    
    try {
      // Simulate photo upload
      const photoId = Date.now().toString();
      const photoUrl = URL.createObjectURL(file);
      
      return {
        photoId,
        photoUrl,
        filename: file.name,
        size: file.size,
        uploadedAt: new Date().toISOString()
      };
    } catch (error) {
      throw new Error("Foto konnte nicht hochgeladen werden");
    }
  }
};