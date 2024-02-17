import { Component } from '@angular/core';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.scss']
})
export class MyhomeComponent {
  selectedFile: File | null = null;
  addedImage: string | null = null;
  selectedImagePosition: string = "1"; // Default to position 1

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  showImage() {
    if (this.selectedFile) {
      // Handle file upload logic here (e.g., upload to server, process, etc.)
      // For now, we'll just create a local URL to display the image
      this.addedImage = URL.createObjectURL(this.selectedFile);
    }
  }

  uploadImage() {
    // Handle the upload logic here (e.g., send to server)
    console.log('Image uploaded. Position:', this.selectedImagePosition);
  }
}
