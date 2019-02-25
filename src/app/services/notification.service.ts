import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private matSnackBar: MatSnackBar) { }

  public showSnackbar(message: string, timeout: number = 3000) {
    this.matSnackBar.open(message, 'DONE', {
      duration: timeout
    });
  }
}
