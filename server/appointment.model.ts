// Define a model for the form fields
interface AppointmentForm {
    patientName: string;
    pincode: string;
    timeRequired: TimeSlot;
    dates: Date[];
    preferredGender: GenderPreference;
  }
  
  // Enum for TimeSlot
  enum TimeSlot {
    Morning = "Morning",
    Afternoon = "Afternoon",
    Evening = "Evening",
    FullTime = "Full Time",
  }
  
  // Enum for GenderPreference
  enum GenderPreference {
    Male = "Male",
    Female = "Female",
    DoesNotMatter = "Does not matter",
  }