import { TestBed,  } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  let httpMock: HttpTestingController;

  beforeEach( () => {
  TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: AppService, HttpTestingController
        }
      ]
    });
   
    service = TestBed.inject(AppService);
    httpMock = TestBed.inject(HttpTestingController);
    
});
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  
   it ('should return results', () => {
   service.getResults().subscribe(result =>{
     expect(result).toBeTruthy();
    
     console.log('results passed');
   });
    
   const call = httpMock.expectOne('/api/simulations');
   expect(call.request.method).toEqual('GET');

   call.flush(httpMock);
   
});

it ('should return rulesets', () => {
  service.getRulesets().subscribe(ruleset =>{
    expect(ruleset).toBeTruthy();
    console.log('rulesets passed');
  });
   
  const calls = httpMock.expectOne('/api/rulesets');
  expect(calls.request.method).toEqual('GET');

  calls.flush(httpMock);
  
});

it ('should return layouts', () => {
  service.getLayouts().subscribe(layout=>{
    expect(layout).toBeTruthy();
    console.log('layouts passed');
  });
  
  const called = httpMock.expectOne('/api/layouts');
  expect(called.request.method).toEqual('GET');

  called.flush(httpMock);
  
});

  //make call
  //intercept call
  //check expected response 
//              
});


