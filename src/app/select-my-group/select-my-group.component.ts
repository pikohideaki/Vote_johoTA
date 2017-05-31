import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'select-my-group',
  templateUrl: './select-my-group.component.html',
  styleUrls: ['./select-my-group.component.css']
})
export class SelectMyGroupComponent implements OnInit {

  stateCtrl: FormControl;

  myUserID: string;
  filteredUserIDs: any;
  filterBy: string;
  panelOpen: boolean = true;

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredUserIDs = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterStates(name));
  }

  ngOnInit() {
  }

  filterStates(val: string) {
    return val ? this.IDs.filter(s => new RegExp(`^${val}`, 'yi').test(s))
               : this.IDs;
  }

  exists( userId ) {
    return this.IDs.findIndex( str => str == userId ) != -1;
  }

  getMyGroup( myUserID: string ) {
    return this.IDs.findIndex( e => e == myUserID ) % 3;
  }
  getVotingGroup( myUserID: string ) {
    return (this.IDs.findIndex( e => e == myUserID ) + 1) % 3;
  }


  IDs: string[] = [
    '3611742072', 
    '1716576811', 
    '4104914950', 
    '9481152779', 
    '1081047021', 
    '6643588288', 
    '2625989216', 
    '0270308482', 
    '3981824390', 
    '5500509331', 
    '0423895742', 
    '4517640621', 
    '6943550750', 
    '2505407309', 
    '9029060361', 
    '1193266392', 
    '9857852889', 
    '7964050558', 
    '6844264824', 
    '4162770685', 
    '3402558025', 
    '4509661889', 
    '1804396617', 
    '1347573229', 
    '7203329515', 
    '1401734932', 
    '7751510781', 
    '2211500098', 
    '9738290633', 
    '4739537657', 
    '5726172558', 
    '1906181033', 
    '2595980399', 
    '2557912879', 
    '9286186248', 
    '6696305380', 
    '8000817142', 
    '6354104887', 
    '7308794779', 
    '1493156561', 
    '5565971575', 
    '5994455279', 
    '1934139245', 
    '2256635221', 
    '9526915198', 
    '2523116544', 
    '6850270985', 
    '1674307900', 
    '7466256900', 
    '3471188344', 
    '2194200977', 
    '5854992001', 
    '3725779699', 
    '8851545119', 
    '1801678321', 
    '3393831500', 
    '5555730582', 
    '9890136422', 
    '7228018570', 
    '2499220340', 
    '9634360274', 
    '2749521430', 
    '1632807091', 
    '6628555673', 
    '1869262111', 
    '2889533998', 
    '8073682423', 
    '7376331615', 
    '7570177484', 
    '3360951501', 
    '4709031797', 
    '6952143671', 
    '7068720245', 
    '7473414787', 
    '7514058519', 
    '6633806301', 
    '2154575357', 
    '7319707837', 
    '1528795567', 
    '4508044404', 
    '3241373885', 
    '6152951024', 
    '6032040188', 
    '1450203803', 
    '4843467886', 
    '1107598946', 
    '1451485817', 
    '7020360978', 
    '7875430464', 
  ];
}
