import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SortPipe } from './sort.pipe';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ModelformComponent } from './modelform/modelform.component';
import { ConsumeService1Component } from './consume-service1/consume-service1.component';
import { ConsumeService2Component } from './consume-service2/consume-service2.component';
import { DataServiceService } from './data-service.service';
import { HttpComponent } from './http/http.component';


@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    CategoryComponent,
    ProductsComponent,
    TemplateformComponent,
    ModelformComponent,
    ConsumeService1Component,
    ConsumeService2Component,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'category',
        component:CategoryComponent
      },
      {
        path:'product',
        component:ProductsComponent
      },
      {
        path:'templateForm',
        component:TemplateformComponent
      },
      {
        path:'modelform',
        component:ModelformComponent
      },
      {
        path:'consumeS1',
        component:ConsumeService1Component
      },
      {
        path:'consumeS2',
        component:ConsumeService2Component
      },
      {
        path:'http',
        component:HttpComponent
      }
    ])
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
