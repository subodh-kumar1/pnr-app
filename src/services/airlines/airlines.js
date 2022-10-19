import httpService from "../network/http/http";

class Airlines {
  getAirlines() {
    return httpService.get(
      "https://iata-and-icao-codes.p.rapidapi.com/airlines"
    );
  }
}
export default new Airlines();
