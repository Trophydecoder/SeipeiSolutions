import { Component } from '@angular/core';
import { ServicespageCarouselComponent } from "../../Components/ServciespageComponents/servicespage-carousel/servicespage-carousel.component";
import { NavbarComponent } from "../../Components/GlobalComponents/navbar/navbar.component";
import { OurServicesComponent } from "../../Components/HomepageComponents/our-services/our-services.component";
import { FooterComponent } from "../../Components/GlobalComponents/footer/footer.component";
import { LaptopsComponent } from "../../Components/ServciespageComponents/laptops/laptops.component";

@Component({
  selector: 'app-servicespage',
  standalone: true,
  imports: [ServicespageCarouselComponent, NavbarComponent, OurServicesComponent, FooterComponent, LaptopsComponent],
  templateUrl: './servicespage.component.html',
  styleUrl: './servicespage.component.scss'
})
export class ServicespageComponent {

}
