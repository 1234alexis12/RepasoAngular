import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "angular-contacto-9218f", appId: "1:1037050615088:web:b4f11fbf8ede98981d64f5", storageBucket: "angular-contacto-9218f.firebasestorage.app", apiKey: "AIzaSyAVACxlKdtkoz22lvKT_9vBkCn1fAr4kpc", authDomain: "angular-contacto-9218f.firebaseapp.com", messagingSenderId: "1037050615088", measurementId: "G-6MH21J9GEZ" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideFunctions(() => getFunctions()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({ projectId: "angular-contacto-9218f", appId: "1:1037050615088:web:b4f11fbf8ede98981d64f5", storageBucket: "angular-contacto-9218f.firebasestorage.app", apiKey: "AIzaSyAVACxlKdtkoz22lvKT_9vBkCn1fAr4kpc", authDomain: "angular-contacto-9218f.firebaseapp.com", messagingSenderId: "1037050615088", measurementId: "G-6MH21J9GEZ" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideFunctions(() => getFunctions()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())]
};
