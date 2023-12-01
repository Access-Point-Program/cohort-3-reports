import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { AppService } from './app.service';
import { Results } from './Results';
import { Ruleset } from './Ruleset';
import { Layout } from './layout';
import { of } from 'rxjs';



describe('AppService', () => {
  let service: AppService;
  let httpMock:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: AppService,
          
        }]
    });
    service = TestBed.inject(AppService);
    
});
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('http Results call', 
  inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
    
    http.get('/simulations').subscribe(service => {
            expect(service).toEqual('Get');
        });

    }))
    it('http Layout call', 
    inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
      
      http.get('/layouts').subscribe(service => {
              expect(service).toEqual('Get');
          });
  
      }))
      it('http Ruleset call', 
      inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
        
        http.get('/rulesets').subscribe(service => {
                expect(service).toEqual('Get');
            });
    
        }))

  //make call
  //intercept call
  //check expected response 


  });
