const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const reportService = {
  async submitReport(reportData) {
    await delay(300);
    
    try {
      // Initialize ApperClient with Project ID and Public Key
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      // Prepare data with proper field mapping for report_c table
      const reportRecord = {
        Name: `Meldung ${new Date().toLocaleDateString('de-DE')}`,
        train_id_c: reportData.train_id_c,
        wagon_id_c: reportData.wagon_id_c,
        category_c: reportData.category_c,
        priority_c: reportData.priority_c,
        description_c: reportData.description_c,
        photo_url_c: reportData.photo_url_c,
        reporter_contact_c: reportData.reporter_contact_c,
        timestamp_c: new Date().toISOString(),
        status_c: "submitted"
      };

      const params = {
        records: [reportRecord]
      };

      const response = await apperClient.createRecord("report_c", params);

      // Handle response
      if (!response.success) {
        throw new Error(response.message || "Fehler beim Senden der Meldung");
      }

      if (response.results) {
        const successfulRecords = response.results.filter(result => result.success);
        const failedRecords = response.results.filter(result => !result.success);
        
        if (failedRecords.length > 0) {
          console.error(`Failed to create report ${failedRecords.length} records:${JSON.stringify(failedRecords)}`);
          throw new Error("Fehler beim Senden der Meldung");
        }
        
        return successfulRecords[0]?.data || reportRecord;
      }

      return reportRecord;
    } catch (error) {
      if (error?.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error("Fehler beim Senden der Meldung");
    }
  },

  async getTrainInfo(trainId, wagonId) {
    await delay(200);
    
    try {
      // Initialize ApperClient with Project ID and Public Key
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        fields: [
          {
            field: {
              Name: "Name"
            }
          },
          {
            field: {
              Name: "line_c"
            }
          },
          {
            field: {
              Name: "wagons_c"
            }
          },
          {
            field: {
              Name: "current_location_c"
            }
          },
          {
            field: {
              Name: "next_stop_c"
            }
          }
        ],
        where: [
          {
            FieldName: "Name",
            Operator: "EqualTo",
            Values: [trainId]
          }
        ]
      };

      const response = await apperClient.fetchRecords("train_c", params);
      
      if (!response.success) {
        throw new Error(response.message || "Zug nicht gefunden");
      }

      if (!response.data || response.data.length === 0) {
        throw new Error("Zug nicht gefunden");
      }

      const train = response.data[0];
      const wagons = train.wagons_c ? train.wagons_c.split('\n') : [];
      
      if (!wagons.includes(wagonId)) {
        throw new Error("Wagen nicht gefunden");
      }
      
      return {
        train_id_c: train.Name,
        line_c: train.line_c,
        wagon_id_c: wagonId,
        current_location_c: train.current_location_c,
        next_stop_c: train.next_stop_c
      };
    } catch (error) {
      if (error?.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error("Fahrzeuginformationen konnten nicht geladen werden");
    }
  },

  async uploadPhoto(file) {
    await delay(400);
    
    try {
      // Simulate photo upload
      const photoId = Date.now().toString();
      const photo_url_c = URL.createObjectURL(file);
      
      return {
        photoId,
        photo_url_c,
        filename: file.name,
        size: file.size,
        uploadedAt: new Date().toISOString()
      };
    } catch (error) {
      throw new Error("Foto konnte nicht hochgeladen werden");
    }
  }
};