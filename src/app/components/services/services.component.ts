import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      id: 2345,
      serviceName: 'Plumbing',
      icon: 'build',
      details: 'Professional plumbing services for your home.',
    },
    {
      id: 2,
      serviceName: 'Electrical Work',
      icon: 'flash_on',
      details: 'Electrical repairs and installations by experts.',
    },
    {
      id: 3,
      serviceName: 'Carpentry',
      icon: 'construction',
      details: 'Skilled carpenters for your woodworking needs.',
    },
    {
      id: 4,
      serviceName: 'Cleaning',
      icon: 'cleaning_services',
      details: 'Deep cleaning services for a sparkling home.',
    },
    {
      id: 5,
      serviceName: 'Painting',
      icon: 'brush',
      details: 'Professional painting services for your interiors and exteriors.',
    },
    {
      id: 6,
      serviceName: 'Landscaping',
      icon: 'eco',
      details: 'Create a beautiful outdoor space with our landscaping services.',
    },
    {
      id: 7,
      serviceName: 'Appliance Repair',
      icon: 'settings_input_component',
      details: 'Fix or maintain your home appliances with our expert technicians.',
    },
    {
      id: 8,
      serviceName: 'Roofing',
      icon: 'roofing',
      details: 'Roof repair, maintenance, and installation services.',
    },
    {
      id: 9,
      serviceName: 'Pest Control',
      icon: 'bug_report',
      details: 'Effective pest control solutions for a pest-free home.',
    },
    {
      id: 10,
      serviceName: 'HVAC Services',
      icon: 'ac_unit',
      details: 'Heating, ventilation, and air conditioning services for comfort.',
    },
    {
      id: 11,
      serviceName: 'Security Systems',
      icon: 'security',
      details: 'Install and maintain security systems for your safety.',
    },
    {
      id: 12,
      serviceName: 'Furniture Assembly',
      icon: 'weekend',
      details: 'Quick and reliable furniture assembly services.',
    },
    {
      id: 13,
      serviceName: 'Window Cleaning',
      icon: 'panorama_fish_eye',
      details: 'Professional window cleaning for a clear view.',
    },
    {
      id: 14,
      serviceName: 'Carpet Cleaning',
      icon: 'local_car_wash',
      details: 'Revitalize your carpets with our cleaning services.',
    },
    {
      id: 15,
      serviceName: 'Masonry',
      icon: 'all_inbox',
      details: 'Masonry and brickwork services for your projects.',
    },
    {
      id: 16,
      serviceName: 'Gutter Cleaning',
      icon: 'invert_colors',
      details: 'Clear and maintain your gutters for proper drainage.',
    },
    {
      id: 17,
      serviceName: 'Home Renovation',
      icon: 'home',
      details: 'Complete home renovation services for a new look.',
    },
    {
      id: 18,
      serviceName: 'Pool Maintenance',
      icon: 'pool',
      details: 'Pool cleaning and maintenance for a sparkling pool.',
    },
    {
      id: 19,
      serviceName: 'Locksmith',
      icon: 'lock',
      details: 'Professional locksmith services for your security needs.',
    },
    {
      id: 20,
      serviceName: 'Handyman Services',
      icon: 'build_circle',
      details: 'A handyman for all your general home repairs and tasks.',
    },
  ];
  searchTerm: string = '';
  filteredServices: any[] = this.services; // Initialize with all services

  constructor(private router: Router, private customerService: CustomerService) {}


  navigateToNextStep(service: any) {
    this.router.navigate(['/technicians', service.id]);
  }
  
  

  search() {
    // Implement your search logic here, e.g., filter services based on the searchTerm
    this.filteredServices = this.services.filter(service =>
      service.serviceName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log('Searching for: ' + this.searchTerm);
    console.log('Filtered services:', this.filteredServices);
  }
}
