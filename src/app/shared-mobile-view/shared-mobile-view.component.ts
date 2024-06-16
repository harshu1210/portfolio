import { Component, Input, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'mobile-view',
  templateUrl: './shared-mobile-view.component.html',
  styleUrls: ['./shared-mobile-view.component.css']
})
export class SharedMobileViewComponent implements OnInit {

  @Input() headerTemplate!: string;
  @Input() template!: string
  @Input() projectTemplate!: string
  @Input() data!: any;
  fromEmailAddress: string = "";
  subject: string = "";
  body: string = "";

  constructor() { }

  ngOnInit(): void {
  }


  public sendEmail(e: Event) {
    e.preventDefault();

    if (this.fromEmailAddress.length === 0) {
      window.alert("Email Address not provided");
    } else if (this.subject.length === 0) {
      window.alert("Email Subject not provided");
    } else if (this.body.length === 0) {
      window.alert("Email Body not provided");
    } else {
      if (this.validateEmail(this.fromEmailAddress) == true) {
        emailjs.sendForm('service_tvs7v3q', 'template_3p9jcvo', e.target as HTMLFormElement, 'bNWc9nUcsg7wbgL-X')
          .then((result: EmailJSResponseStatus) => {
            window.alert("Email Sent Successfully");
          }, (error) => {
            window.alert("Failed to send email. Please try again later.");
          });
      } else {
        window.alert("Please recheck Email Address")
      }
    }

  }

  validateEmail(email: string): boolean {
    // Regular expression for basic email validation
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

}
