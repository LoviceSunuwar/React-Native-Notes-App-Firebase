import 'dotenv/config';


export default {
  expo: {
    name: 'acti',
    slug: 'acti',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF'
      }
    },
    web: {
      favicon: './assets/favicon.png'
    },
    extra: {
      apiKey: "AIzaSyCrihp3TRQkjcmul2ndFTfPKpcWgdIA_ig",
      authDomain: "reactnativecourseproject.firebaseapp.com",
      projectId: "reactnativecourseproject",
      storageBucket: "reactnativecourseproject.appspot.com",
      messagingSenderId: "836228769938",
      appId: "1:836228769938:web:3e060a5bb210c61b879e4b",
      measurementId: "G-R3CFJQP7NM"
    }
  }
}
