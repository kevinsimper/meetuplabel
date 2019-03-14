# Print name tags labels at meetups

I wrote a detailed description on how it works here

https://medium.com/@kevinsimper/how-to-print-name-tags-for-your-meetup-c6293a8faf8f

http://www.undocprint.org/formats/page_description_languages/brother_p-touch

## Running in the browser

This will run in the browser by using a couple of projects.

- A way to provide the template
- A way to generate the label
- A way to connect to the printer
- A way to provide the attendees names

All running in the browser connected to a Brother QL820NWB printer.

## Requirements

```
brew install libusb
pip install virtualenv
virtualenv env
. ./env/bin/activate
pip install -r requirement.txt
```

## Printing directly from meetup.com

In order to start printing right away there are a couple of steps you need to take.

You need to run the command
```
. ./env/bin/activate
```
and then run the server with
```
npm start
```

Now you will be runnning your app on port `http://localhost:9000`. There is a template by which you will print your label, and you can see it by navigating to `http://localhost:9000/label.html`. This template file can be adjusted to your use case by editing the page in `label/label.html`

Now you can start the actual printing:
 - Make sure you have your printer connected to your computer/device.
 - Navigate to your meetup.com atendee page. 
 - Open the command line tools and paste the code from the browserScript file. This will modify the DOM and add a `Print` button next to each of the atendees
 - Print 🖨

## Generating a different qr code to use

In order to customise your label, you might want to generate a new qr code pointing to your own website.
This is being done by running the code inside the `qr.js` file, and you can do it so:

```
node qr.js https://copenhagenjs.dk
```

The qr code above will point to `https://copenhagenjs.dk`
