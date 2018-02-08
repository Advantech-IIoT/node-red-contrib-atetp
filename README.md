# node-red-contrib-atETP
A collection of [Node-RED](http://nodered.org) nodes for Advantech IIoT electronic typeplate function.

Notice that an Advantech IIoT Platform SDK have to be installed to make this node works correctly.
Advantech IIoT Platform SDK download link is shown below:
https://github.com/Advantech-IIoT/Platform-SDK/tree/master/bin

## Installation
Use npm command to install this package locally in the Node-RED modules directory
```bash
npm install node-red-contrib-atetp
```
or install it globally with the command
```bash
npm install node-red-contrib-atetp -g
```

## Usage
ETP Node-RED node provide four functions in this package.
 - Read ETP data
 - Write ETP data
 - Check lock status
 - Toggle lock status

### Example
Please refer to [demo.json](./demo.json).  
![demoflow](./demoflow.jpg)  
 - Input anything to `Read ETP data` node for triggering it to print all ETP data to msg node and be shown on the right side.
 - Input `label` and `text` attributes to `Write ETP data` node to write `text` to the specified `label`.
 - Input `address` attribute to `Check lock status` node to get the lock status of this area.
 - Input `address` and `password` attributes to `Toggle lock status` node to toggle lock status and print the result to msg node.

## Test Platform
 - Windows 10 Enterprise LTSB with node.js 6.10.1

## History
 - 1.0.5 - October 2017 : Initial Release

## License
Copyright 2017 ADVANTECH Corp. under [the Apache 2.0 license](LICENSE).
