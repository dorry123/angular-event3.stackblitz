import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtenteService } from '../../services/utente.service';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {Utente} from '../../model/utente.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  private profiloFormModel: FormGroup;
  private utente: Utente;

  constructor(private formBuilder: FormBuilder, public utenteService: UtenteService, private navController: NavController) {
  }

tipoutente: any;
societa: any;
piva: any;
nome: any; 
cognome: any;
telefono: any;
indirizzo: any;
prov: any;
cap: any;
localita: any;
username: any;
email: any;
pass: any;
   
  ngOnInit() {
    this.profiloFormModel = this.formBuilder.group({
      nome: ['', Validators.compose([ Validators.required ])],
      email: ['', Validators.compose([ Validators.required ])],
      password: ['', Validators.compose([ Validators.required ])]
    });

    this.utenteService.getUtente().subscribe((utente) => {
      this.profiloFormModel.patchValue({ nome: utente.nome, email: utente.email, pass: utente.password});
      this.utente = utente;
    });
  }

  registra(){
    // tslint:disable-next-line:label-position
    this.utente.email = this.profiloFormModel.value.email;
    this.utente.username = this.profiloFormModel.value.username;
   const rt = this.utenteService.registration(this.tipoutente, this.societa, this.piva, this.nome,  this.cognome, this.email,  
                                              this.telefono, this.indirizzo, this.prov, this.cap, this.localita, this.username, 
                                              this.pass );

   return console.log(rt);
         this.navController.back();
  }

    onSubmit(): void {
      this.utente.email = this.profiloFormModel.value.email;
      this.utente.cel_tel = this.profiloFormModel.value.cel_tel;
      this.utenteService.updateProfilo(this.utente).subscribe((nuovoUtente: Utente) => {
        this.navController.back();
    });
  }
  
  }

