import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/GlobalComponents/navbar/navbar.component";
import { ContactusCarouselComponent } from "../../Components/ContactusComponents/contactus-carousel/contactus-carousel.component";
import { ProjectinMindComponent } from "../../Components/HomepageComponents/projectin-mind/projectin-mind.component";
import { FooterComponent } from "../../Components/GlobalComponents/footer/footer.component";

@Component({
  selector: 'app-contactuspage',
  standalone: true,
  imports: [NavbarComponent, ContactusCarouselComponent, ProjectinMindComponent, FooterComponent],
  templateUrl: './contactuspage.component.html',
  styleUrl: './contactuspage.component.scss'
})
export class ContactuspageComponent {

}
