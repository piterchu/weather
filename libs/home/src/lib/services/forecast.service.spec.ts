import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { API_KEY, ForecastService } from './forecast.service';

describe('ForecastService', () => {
  let service: ForecastService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]
    })
  );

  beforeEach(() => {
    service = TestBed.get(ForecastService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should transform the result to a City object', () => {
    const cityId= 123;
    const url = `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}&_=123456&units=metric`;

    jest.spyOn(Date.prototype, 'getTime').mockReturnValue('123456');

    service.getForecastByCityId(cityId).subscribe(result => {
      expect(result).toEqual({ temperature: 25, city: 'Montpellier', iconCode: 200 });
    });

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('GET');
    req.flush([{
      main: {temp: 25},
      name: 'Montpellier',
      weather: [{
        id: 200
      }]
    }]);

  });
});
