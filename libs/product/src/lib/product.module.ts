import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSearchComponent } from './product-search/product-search.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './product-item/product-item.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { ButtonModule } from 'primeng/button';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { UiGalleryComponent } from './ui-gallery/ui-gallery.component';
import { MidNightDeliveryComponent } from './mid-night-delivery/mid-night-delivery.component';

const route: Routes = [
  { path: 'products/:productId', component: ProductDetailComponent },
  { path : 'MidNightDelivery', component:MidNightDeliveryComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    RouterModule.forChild(route),
    RatingModule,
    FormsModule,
    InputNumberModule,
    ButtonModule,
  ],
  declarations: [
    ProductSearchComponent,
    ProductItemComponent,
    FeaturedProductComponent,
    MidNightDeliveryComponent,
    ProductDetailComponent,
    UiGalleryComponent,
  ],
  exports: [
    ProductSearchComponent,
    FeaturedProductComponent,
    MidNightDeliveryComponent,
    ProductItemComponent,
    ProductDetailComponent,
    UiGalleryComponent,

  ],
})
export class ProductModule {}
