import moment from "moment";

export const formattedDuration = (minutes: number) => {
    if (minutes === 0) {
        return '0 минут';
      }
    
      const lastDigit = minutes % 10;
      const lastTwoDigits = minutes % 100;
    
      let result;
    
      switch (true) {
        case (lastTwoDigits >= 11 && lastTwoDigits <= 19):
          result = `${minutes} минут`;
          break;
        case (lastDigit === 1):
          result = `${minutes} минута`;
          break;
        case (lastDigit >= 2 && lastDigit <= 4):
          result = `${minutes} минуты`;
          break;
        default:
          result = `${minutes} минут`;
      }
    
      return result;
};

export const secondsToMinutes = (seconds: number) => {
    const duration = moment.duration(seconds, 'seconds');
    const minutes = duration.minutes();
    return minutes;
  }