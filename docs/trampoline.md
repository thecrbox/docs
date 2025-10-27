# Connect *thecrbox* to your Wi-Fi

## Why?

To access all features (e.g. fine-tune the PID if needed), *thecrbox* must be accessible via Wi-Fi network you plan to control it with. 

There’s no dedicated Android/iOS app—you’ll enter your Wi-Fi details during setup.

## Android (Improv over BLE)

<improv-wifi-launch-button>
  <span slot="unsupported">Your browser doesn’t support Web Bluetooth. Use Chrome/Edge on desktop or Android.</span>
</improv-wifi-launch-button>

1. Tap the button above^
1. Find *box2-XXXX* from the nearby deviceslist
1. Click "Pair" (approve the pairing/permission prompt)
1. Enter your Wi-Fi name and password, then tap `OK`

## iPhone (manual via hotspot)

1. In Wi-Fi settings, join the *box2-XXXX* network (this network has no internet; it’s only for setup)
1. In Safari, open open: [http://192.168.4.1](http://192.168.4.1)` (note `http://`, not `https://`)
1. Enter your Wi-Fi name and password, then tap `Save`

## Tip

Wi-Fi names and passwords are case-sensitive.
