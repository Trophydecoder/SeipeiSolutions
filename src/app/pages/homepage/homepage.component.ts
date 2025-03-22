import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/GlobalComponents/navbar/navbar.component";
import { CarouselComponent } from "../../Components/HomepageComponents/carousel/carousel.component";
import { AboutComponent } from "../../Components/HomepageComponents/about/about.component";
import { OurServicesComponent } from "../../Components/HomepageComponents/our-services/our-services.component";
import { ProjectinMindComponent } from "../../Components/HomepageComponents/projectin-mind/projectin-mind.component";
import { FooterComponent } from "../../Components/GlobalComponents/footer/footer.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, CarouselComponent, AboutComponent, OurServicesComponent, ProjectinMindComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
