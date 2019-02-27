# Print name tags labels at meetups

I wrote a detailed description on how it works here

https://medium.com/@kevinsimper/how-to-print-name-tags-for-your-meetup-c6293a8faf8f

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
