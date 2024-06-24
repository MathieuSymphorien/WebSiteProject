import { Injectable } from '@angular/core';
import { Test } from '../models/test';
import { SnapType } from '../models/snap-type.type';

@Injectable({
  providedIn: 'root'
})
export class TestService {

    private tests: Test[] = [
    new Test(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    ).withLocation("Montagne"),
    new Test(
      'TESt',
      'TEST !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      10
    )
  ] 
  getTests(): Test[]{
    return[...this.tests];
    }

    getFaceSnapById(faceSnapId: string): Test {
        const foundFaceSnap = this.tests.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
          throw new Error('FaceSnap not found!');
        }
        return foundFaceSnap;
      }
    
      snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        faceSnap.snap(snapType);
      }
}