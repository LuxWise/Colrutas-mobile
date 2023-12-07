import 'dotenv/config'

export default {
  "expo": {
    "name": "maps-base",
    "slug": "maps-base",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "plugins": [
      [
        "@rnmapbox/maps",
        {
          "RNMapboxMapsVersion": "11.0.0",
          "RNMapboxMapsDownloadToken": process.env.MAPBOX_KEY
        }
      ]
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.luxwise.mapsbase"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "1464a930-db1a-492f-a3d1-3aa36e466e18"
      }
    }
  }
}