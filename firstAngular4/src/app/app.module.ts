import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
import { AnimationComponent } from './animation/animation.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ParentComponent } from './parent-child/parent/parent.component';
import { Child1Component } from './parent-child/child1/child1.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';


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
    HttpComponent,
    AnimationComponent,
    SearchFilterPipe,
    ParentComponent,
    Child1Component,
    BootstrapComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
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
      },
      {
        path:'animate',
        component:AnimationComponent
      },
      {
        path:'parentchild',
        component:ParentComponent
      },
      {
        path:'bootstrap',
        component:BootstrapComponent
      }
    ])
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
