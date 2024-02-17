import { Component } from '@angular/core';

@Component({
  selector: 'app-casepopup',
  templateUrl: './casepopup.component.html',
  styleUrls: ['./casepopup.component.scss']
})
export class CasepopupComponent {
  formData: any = {}; // Créez un objet pour stocker les données du formulaire

  onSubmit() {
    // Logique de soumission du formulaire ici
    // Vous pouvez accéder aux valeurs du formulaire via this.formData
    console.log("Formulaire soumis:", this.formData);
  }

  onFileSelected(event: any) {
    // Logique pour gérer les fichiers sélectionnés
    // Vous pouvez accéder aux fichiers via event.target.files
    console.log("Fichiers sélectionnés:", event.target.files);
  }
}
