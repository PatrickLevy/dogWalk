App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');
App.accessRule("*");


// Set up resources such as icons and launch screens.
App.icons({
  // 'iphone': '/public/sirLogo.png',
  // 'iphone_2x': '/public/sirLogo.png',
  'android_ldpi': 'public/dogClipArt.png',
  'android_mdpi': 'public/dogClipArt.png',
  'android_hdpi': 'public/dogClipArt.png',
  'android_xhdpi': 'public/dogClipArt.png'
  // ... more screen sizes and platforms ...
});

App.launchScreens({
//   // 'iphone': '/pubic/sirLogo.png',
//   // 'iphone_2x': '/public/sirLogo.png',
  'android_ldpi_portrait': 'public/dogClipArt.png',
  'android_mdpi_portrait': 'public/dogClipArt.png',
  'android_hdpi_portrait': 'public/dogClipArt.png',
  'android_xhdpi_portrait': 'public/dogClipArt.png',
  'android_ldpi_landscape': 'public/dogClipArt.png',
  'android_mdpi_landscape': 'public/dogClipArt.png',
  'android_hdpi_landscape': 'public/dogClipArt.png',
  'android_xhdpi_landscape': 'public/dogClipArt.png'
//   // ... more screen sizes and platforms ...
});