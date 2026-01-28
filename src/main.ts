import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { EmployeeComponent } from './app/employee/employee';
import { provideRouter } from '@angular/router';
import test from 'node:test';
import { Test } from './app/test/test';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));

  bootstrapApplication(App,appConfig);
  providers: [provideHttpClient() ]     // <-- registers HttpClient
  
