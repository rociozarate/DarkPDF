import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-pdf',
  standalone: true,  
  imports: [CommonModule],
  templateUrl: './upload-pdf.component.html',
  styleUrls: ['./upload-pdf.component.css']
})
export class UploadPdfComponent {
  loading = false;
  selectedFile: File | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  uploadFile() {
    if (this.selectedFile) {
      this.loading = true;

      // Simula el envío del archivo al backend
      setTimeout(() => {
        console.log("Procesamiento completado");
        this.loading = false; // Aquí puedes mostrar la vista previa del PDF
      }, 2000);
    }
  }
}